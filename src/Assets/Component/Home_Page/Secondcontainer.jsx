import React from 'react'
import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const Secondcontainer = ({Header, Header_summary, Header_url, Direaction, Header_Button_text}) => {
    var show = false

    if(Direaction == true){
        show = true
    }
    return (
        <Box
            sx={{
                mt: 3,
                width: '100%',
                height: '40vh',
                display: 'flex',
                flexDirection: show ? 'row' : 'row-reverse', // Toggle direction
                // border: '1px solid white',
                position: 'static',
            }}
        >
            {/* Image */}
            <Box
                component="img"
                src="/vite.svg"
                alt="Image 1"
                sx={{
                    width: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    // border: '1px solid red',
                }}
            />

            {/* Content */}
            <Box
                sx={{
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // border: '1px solid red',
                }}
            >
                <Typography sx={{ color: 'white', padding: 1 }}>
                    <Typography variant='h4'>
                        {Header}
                    </Typography>
                    {Header_summary}
                    <Typography>
                    <IconButton>
                        <Button variant="contained" component={Link} to={Header_url}>{Header_Button_text}</Button>
                    </IconButton>
                    </Typography>
                </Typography>
            </Box>
        </Box>
    )
}

export default Secondcontainer