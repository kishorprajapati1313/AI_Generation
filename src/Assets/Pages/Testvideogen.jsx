// VideoGenerator.js
import React, { useState } from 'react';
import { Box, Button, Skeleton, Typography } from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { getuser } from '../Component/Navbar';
import Theme, { GlobleVariable } from "../../Theme"
import axios from 'axios';

const Testvideogen = () => {
    let currentindex = 0;
    let apiKey = GlobleVariable.React_api;
    let Backend_url = GlobleVariable.Backend_url;
    const [inputFile, setInputFile] = useState(null);
    const [videoUrl, setVideoUrl] = useState(null);
    const [generatedId, setGeneratedId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [fileName, setFileName] = useState(''); // State to store file name
    const userdata = getuser();

    const handleChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type;
            const acceptedFileTypes = ['image/jpeg', 'image/png'];
            if (!acceptedFileTypes.includes(fileType)) {
                setErrorMessage('Only JPEG and PNG formats are allowed.');
                e.target.value = '';
                return;
            }
            const img = new Image();
            img.onload = () => {
                const { width, height } = img;
                const acceptedSizes = [
                    { width: 1024, height: 576 },
                    { width: 576, height: 1024 },
                    { width: 768, height: 768 },
                ];
                const isValidSize = acceptedSizes.some(
                    (size) => width === size.width && height === size.height
                );
                if (!isValidSize) {
                    setErrorMessage('Invalid image size. Only 1024x576, 576x1024, or 768x768 are allowed.');
                    e.target.value = '';
                } else {
                    setInputFile(file);
                    setFileName(file.name);
                    setErrorMessage('');
                }
            };
            img.onerror = () => {
                setErrorMessage('Unable to read image file.');
                e.target.value = '';
            };
            img.src = URL.createObjectURL(file);
        }
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        setVideoUrl('');
        const data = new FormData();
        data.append('image', inputFile);
        data.append('seed', 0);
        data.append('cfg_scale', 1.8);
        data.append('motion_bucket_id', 127);

        try {
            const response = await axios.post(
                'https://api.stability.ai/v2beta/image-to-video',
                data,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            if (response.data && response.data.errors) {
                const error = response.data.errors[0];
                setErrorMessage(error);
                return;
            }
            setGeneratedId(response.data.id);
        } catch (error) {
            if (error.response && error.response.data) {
                const { errors } = error.response.data;
                if (errors && errors.length > 0) {
                    currentindex += 1;
                    apiKey = apiget(currentindex);
                    handleSubmit();
                    return;
                }
            } else {
                setErrorMessage(error.message || 'Unknown error occurred.');
            }
        }
    };

    const fetchVideo = async (generatedId) => {
        try {
            const response = await axios.get(
                `https://api.stability.ai/v2beta/image-to-video/result/${generatedId}`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        Accept: 'video/*',
                    },
                    responseType: 'blob',
                }
            );
            if (response.status === 202) {
                setTimeout(() => fetchVideo(generatedId), 10000);
            } else if (response.status === 200) {
                const savethedata = await axios.post(`${Backend_url}/genrateduserdata`, { userdata, generatedId });
                const videoBlob = response.data;
                const url = URL.createObjectURL(videoBlob);
                setVideoUrl(url);
                setLoading(false);
            }
        } catch (error) {
            setErrorMessage(`Error fetching video: ${error.message}`);
            setLoading(false);
        }
    };

    React.useEffect(() => {
        if (generatedId) {
            fetchVideo(generatedId);
        }
    }, [generatedId]);

    return (
        <Box sx={{ backgroundColor: Theme.primary[100], width: "100%", padding: '20px', borderRadius: '8px' }}>
            <Box sx={{ maxWidth: '700px', margin: '0 auto' }}>
                <Typography textAlign="center" variant="h4" sx={{ color: Theme.white[100], fontWeight: 'bold' }}>
                    Video Generator
                </Typography>
                {errorMessage && (
                    <Typography color="red" fontWeight="bold" sx={{ marginTop: '10px' }}>
                        {errorMessage}
                    </Typography>
                )}
                <form onSubmit={handleSubmit}>
                    <input
                        type="file"
                        id="file-upload"
                        style={{ display: 'none' }}
                        accept="image/jpeg, image/png"
                        onChange={handleChange}
                    />
                    <Button
                        component="label"
                        htmlFor="file-upload"
                        sx={{
                            backgroundColor: Theme.primary[10],
                            padding: '30px',
                            borderRadius: '8px',
                            border: "3px dashed",
                            color: Theme.white[100],
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: "18px",
                            fontWeight: "bold",
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                backgroundColor: Theme.secondary[100],
                                color: Theme.white[100],
                                transform: 'scale(1.05)'
                            },
                        }}
                    >
                        <AddPhotoAlternateOutlinedIcon sx={{ fontSize: "40px" }} />
                        Upload Image
                        {fileName && (
                            <Typography sx={{ fontSize: '14px', marginTop: '10px', color: Theme.grey[100] }}>
                                {fileName}
                            </Typography>
                        )}
                    </Button>
                    <Button
                        type="submit"
                        disabled={loading}
                        sx={{
                            marginTop: '20px',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            backgroundColor: loading ? Theme.grey[100] : Theme.secondary[100],
                            color: Theme.white[100],
                            fontWeight: 'bold',
                            boxShadow: loading ? 'none' : '0px 4px 10px rgba(0, 0, 0, 0.2)',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease',
                            "&:hover": {
                                backgroundColor: loading ? Theme.grey[100] : Theme.primary[10],
                                boxShadow: loading ? 'none' : '0px 6px 12px rgba(0, 0, 0, 0.3)',
                            },
                            "&:active": {
                                transform: 'scale(0.95)',
                            }
                        }}
                    >
                        {loading ? 'Generating...' : 'Generate'}
                    </Button>
                </form>
                <Box height={videoUrl ? "auto" : "250px"}>
                    {loading && (
                        <Skeleton variant="rectangular" width="100%" height={300} animation="wave" sx={{ backgroundColor: Theme.grey[100] }} />
                    )}
                    {videoUrl && (
                        <Box marginTop={2}>
                            <video controls width="100%">
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <Button
                                variant="contained"
                                sx={{
                                    marginTop: '10px',
                                    backgroundColor: Theme.secondary[100],
                                    "&:hover": { backgroundColor: Theme.primary[10] },
                                }}
                                onClick={() => {
                                    const a = document.createElement('a');
                                    a.href = videoUrl;
                                    a.download = 'video.mp4';
                                    a.click();
                                }}
                            >
                                Download Video
                            </Button>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Testvideogen;
