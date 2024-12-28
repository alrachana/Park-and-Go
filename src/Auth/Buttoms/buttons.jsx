import React from "react";
import { useNavigate } from "react-router-dom";
import './buttons.css';
import Navbar1 from "../../NavBar/Navbar1";
const Buttons=()=>{
    const navigate = useNavigate();

    return(
        <div className="main5">
    
        <div className="home-page">
            <button onClick={()=> navigate('/login')} className="btn">Log In</button>
            <button  onClick={()=> navigate('/signUp')} className="btn">Sign Up</button>
        </div>
        </div>
    )
}
export default Buttons;