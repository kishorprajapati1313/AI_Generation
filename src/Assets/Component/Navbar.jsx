import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* ------------------- Fillter For the Container  ----------------------*/}
      <Box  sx={{ backdropFilter: 'blur(8px)', }} />

      <AppBar position="static" sx={{background: 'linear-gradient(135deg, rgba(255, 55, 255, 0.1), rgba(55, 55, 250, 0.1))', borderRadius: "100px",}}>
        {/* ---------------------------- Toggel Button ------------------------------------------- */}
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* ------------------------------- Logo ---------------------------- */}
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1,  backgroundSize:"cover" }}>
            <img src="/vite.svg" alt="LOGO" style={{ marginTop:"10px"}}/>
          </Typography>

          {/* ---------------------------- Login Button ---------------------------- */}
          <Button variant="contained" sx={{ ml: 2 }} component={Link} to="/login"> Login </Button>

          {/* ---------------------------- Profile Button ---------------------------- */}
          <Button color='inherit' sx={{borderRadius: "50%", ml:"2px"}} > <AccountCircleOutlinedIcon sx={{ fontSize:"40px"}}/> </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
