import React from 'react'
import Navbar from '../Component/Navbar'
import { Box, Grid, Typography } from '@mui/material'
import Responsivegallry from '../UI-Test/Responsivegallry';

const Home = () => {
  const Heightsize = "60vh";
  return (
    <div>
      {/* --------------------------- Video Container -------------------------------- */}
      <Box sx={{ mt: 2, color: "white", position: "relative", height: Heightsize, overflow: 'hidden' }}>

        <Grid container >
          <Grid item xs={12} >
            <video autoPlay loop muted style={{ height: Heightsize, width: "100%", objectFit: "cover", zIndex: 0 }} >
              <source src="/rect4.mp4" type="video/mp4" />
            </video>

            <Typography sx={{
              position: 'absolute',
              top: '50%',
              left: '5%',
              transform: 'translateY(-50%)',
              color: 'white',
              zIndex: 2,
              width: "40%"
            }}
              variant="h3" objectFit="cover">
              Welcome to the VisionVerse
              <Typography variant='body2' objectFit="cover">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid praesentium nostrum nemo harum dolorum doloribus sint maxime natus
                  officiis dolore ipsum ut quam soluta aspernatur distinctio, sed quidem facilis magnam eaque, voluptate magni error nobis. Pariatur quas ut quaerat,
                  exercitationem odio cupiditate autem a sint, minus soluta sed vitae.
                </p>
              </Typography>
            </Typography>

          </Grid>

        </Grid>
      </Box>



      {/* -------------------------------- Generting content information ------------------------ */}
      <Box
        sx={{
          mt: 2,
          width: '100%',
          height: '30vh',
          display: 'flex',
          // flexDirection: isImageLeft ? 'row' : 'row-reverse', // Toggle direction
          flexDirection: 'row-reverse', // Toggle direction
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
              Image Generation
            </Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad at hic quod expedita tempora, quos ratione aspernatur praesentium laudantium impedit?
          </Typography>
        </Box>
      </Box>

      {/* --------------------------------- Generated image Demos ----------------------------------- */}
      <Responsivegallry />

    </div>
  )
}

export default Home