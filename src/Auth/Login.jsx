import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar1 from "../NavBar/navbar1";
import { auth } from "./firebase"; // Import Firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use Firebase Authentication to sign in the user
      await signInWithEmailAndPassword(auth, username, password);

      alert("Login successful!");
      navigate("/Homepage"); // Redirect to homepage
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert(`Invalid username or password: ${error.message}`);
    }
  };

  return (
    <div className="main2">
      <div className="Nav">
        <Navbar1 />
      </div>
      <div className="addUser">
        <h3>Log In</h3>
        <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Enter your email"
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <div className="login">
          <p>Don't Have an account?</p>
          <Link to="/SignUp" className="btn btn-primary2">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
