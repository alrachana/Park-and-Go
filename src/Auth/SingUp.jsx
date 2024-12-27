import React, { useState } from "react";
import "./SignUp.css";
import { auth } from "./firebase"; // Import Firebase auth
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Navbar1 from "../NavBar/navbar1";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use Firebase Authentication to create a new user
      await createUserWithEmailAndPassword(auth, username, password);
      alert("Sign-Up successful!");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert(`Sign-Up failed: ${error.message}`);
    }
  };

  return (
    <div className="main6">
      <div className="Nav">
        <Navbar1 />
      </div>

      <div className="addUser">
        <h3>Sign Up</h3>
        <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="name">User Name:</label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Enter your name"
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
            <button type="submit" className="btn btn-success">
              Sign Up
            </button>
          </div>
        </form>
        <div className="login">
          <p>Already have an account?</p>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
