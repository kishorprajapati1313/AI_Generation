import React from 'react'
// import Theme from './Theme.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Assets/Pages/Home.jsx'
import Login from './Assets/Pages/User_Login/Login.jsx'
// import About from './Assets/Pages/About.jsx'
import Navbar from './Assets/Component/Navbar'
import Sign from './Assets/Pages/User_Login/Sign.jsx'
import Forgot from './Assets/Pages/User_Login/Forgot.jsx'


export const Approute = () => {
  return (  
    <>
        <Router>
      <Navbar />

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signin" element={<Sign/>} />
                <Route path="/forgotpas" element={<Forgot/>} />
    
                {/* <Route path="/" component={About} /> */}
            </Routes>
        </Router>
        </>
  )
}
