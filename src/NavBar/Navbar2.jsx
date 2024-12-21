import React, { useState , useEffect } from 'react';
import './Navbar2.css'
import HowItWorks from "../HowItsWork/HowItsWork";
import logo from './logo2.png'



const Navbar2 = () => {
    const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
    
        const howItWorksHandler = () => {
            setIsHowItWorksOpen((prevstate) => !prevstate);
        };
        const [isHovered, setIsHovered] = useState(false); // State to toggle hover effect

  const userName =  useEffect(() => {
    // Fetch the email from localStorage when the Navbar loads
    const trimmedUsername = localStorage.getItem("user");
    
  }, []);;
    return (
        <>
        <header className="header" >
            {/* <a href="/" className="logo">logo</a> */}
            <picture className='logo'>
		      	  <h1>Park & Go</h1>
				  <h5>Easy Parking For A Busy Life </h5>
		        
		      </picture>
            <nav className="navhar">
                <a href="/Homepage" className='home'>Home</a>
                <a href='/BookingList' className='booking'>Booking</a>
                <a className="hit"  onClick={howItWorksHandler}> How It's Work</a>
                
              
                <a href="/" className='s1'>sign out</a>
            </nav>
            {isHowItWorksOpen && <HowItWorks isHowItWorksOpen = {isHowItWorksOpen} closeHowItWorks = {howItWorksHandler}  />}
            
        </header>
        
        </>
    )
}

export default Navbar2;

