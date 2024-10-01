import React from 'react'
import Navbar from '../Component/Navbar'
import { Box, Grid, Typography } from '@mui/material'
import Responsivegallry from '../UI-Test/Responsivegallry';
import Firstcontainer from '../Component/Home_Page/Firstcontainer';
import Secondcontainer from '../Component/Home_Page/Secondcontainer';

const Home = () => {
  const Heightsize = "60vh";

  const Header1 = "Image Generation"
  const Header1_Summary =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni deleniti saepe aspernatur error officiis autem quisquam ab nemo eveniet!"
  const Header1_url = "/Image_generation"
  const Header1_Button_text = "Image Generation"

  const Header2 = "Video Generation"
  const Header2_Summary =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni deleniti saepe aspernatur error officiis autem quisquam ab nemo eveniet!"
  const Header2_url = "/Video_generation"
  const Header2_Button_text = "Video Generation"

  const Direaction = true
  return (
    <div>
      {/* --------------------------- Video Container -------------------------------- */}
      <Firstcontainer Heightsize={Heightsize} />

      {/* -------------------------------- Generting content information ------------------------ */}
      <Secondcontainer Header={Header1} Header_summary={Header1_Summary} Header_url={Header1_url} Direaction={false} Header_Button_text={Header1_Button_text}/>
      <Secondcontainer Header={Header2} Header_summary={Header2_Summary} Header_url={Header2_url} Direaction={true} Header_Button_text={Header2_Button_text}/>

      {/* --------------------------------- Generated image Demos ----------------------------------- */}
      <Responsivegallry />

    </div>
  )
}

export default Home