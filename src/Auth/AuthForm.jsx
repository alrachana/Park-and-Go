import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SingUp";
import StartingPage1 from "../Pages/StartingPage";

const AuthForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To track login state
  const navigate = useNavigate(); // Hook for navigation

  // Handle successful signup
  const handleSignupSuccess = () => {
    alert("Sign-up successful! Redirecting to Login.");
    navigate("/login"); // Navigate to login page
  };

  // Handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Update login state
    alert("Login successful! Redirecting to Starting Page.");
    navigate("/"); // Navigate to starting page
  };

  return (
    <>
      <Routes>
        {/* Signup Route */}
        <Route
          path="/signup"
          element={<SignUp onSignupSuccess={handleSignupSuccess} />}
        />

        {/* Login Route */}
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
         <Route path="/Startingpage" element={<StartingPage1 />} />

        {/* Starting Page Route */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <StartingPage1 />
            ) : (
              <SignUp onSignupSuccess={handleSignupSuccess} />
            )
          }
        />
        <Route path="/SrtartingPage" element={<StartingPage1/>}/>
      </Routes>

    </>
  );
};



export default AuthForm;
