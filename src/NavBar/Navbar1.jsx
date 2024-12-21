import React, {useState} from 'react';
import logo from './p2-P.png'

import  './Navbar1.css';
import HowItWorks from "../HowItsWork/HowItsWork";

const Navbar1 = () => {
	const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

	const howItWorksHandler = () => {
		setIsHowItWorksOpen((prevstate) => !prevstate);
	};

	return (
		<>
		  <nav className = "nav">
	      
		      <picture className='logo'>
		      	  <h1>Park & Go</h1>
				  <h5>Easy Parking For A Busy Life </h5>
		        
		      </picture>
	      

	      <button className = "glowonhover" onClick = {howItWorksHandler}>How it works</button>

		  </nav>
		  
		  {isHowItWorksOpen && <HowItWorks isHowItWorksOpen = {isHowItWorksOpen} closeHowItWorks = {howItWorksHandler}  />}
		</>
	);
}

export default Navbar1;
