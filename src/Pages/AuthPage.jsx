import React from "react";
import Navbar1 from "../NavBar/navbar1";
import HeroAuth from "../HeroAuth";
import bg from './bg1.jpg'

const AuthPage =()=>{
    const heroStyle = {
    
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    
      };
    return (
        <div style={heroStyle}>
        <Navbar1/>
        <HeroAuth/>
        
        </div>
    )
}

export default AuthPage;