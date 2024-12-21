import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar1 from "../NavBar/navbar1";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim the user inputs to remove leading/trailing spaces
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    // Debugging: Log entered username and password
    console.log("Entered Username:", trimmedUsername);
    console.log("Entered Password:", trimmedPassword);

    

    // Save the username to localStorage
    localStorage.setItem("user", trimmedUsername);

    navigate("/Homepage");
  };
  
  return (

   <div className="main2">
    <div className="Nav">
      <Navbar1/> 
    </div>
    <div className="addUser"  >

      <h3>Log In</h3>
      <form className="addUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <a href="/Homepage">
          <button  type="submit" className="btn btn-primary">
            Login
          </button>
          </a>
        </div>
      </form>
      <div className="login" >
        <p>Don't Have an account?</p>
        <Link to="/SignUp" className="btn btn-primary2" >
          Sign Up
        </Link>
      </div>
    </div>
    </div>
   
  );
};

export default Login;
