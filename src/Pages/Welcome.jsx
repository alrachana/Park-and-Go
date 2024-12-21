import React from "react";
//import { useNavigate } from "react-router-dom";

import Navbar1 from "../NavBar/navbar1";
import AuthForm from "../Auth/AuthForm";
import bg from './bg1.jpg'
import Buttons from "../Auth/Buttoms/buttons";

const Welcome=()=>{


  const heroStyle = {
    backgroundImage: `url(${bg})`,
    height: "100vh",
    
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

  };


    return(
        <div style={heroStyle}>     
        <Navbar1/>

        <Buttons/>
        </div>
    )
}

export default Welcome;













// import React from 'react';
// import Navbar1 from '../Layout/Navbar1';
// import Hero from '../Layout/Hero';

// const Welcome = () => {
// 	return (
// 	  <>
// 	    <Navbar1 />
// 	    <Hero />
// 	  </>
// 	)
// };

// export default Welcome;