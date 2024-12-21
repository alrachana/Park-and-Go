import React from "react";
import {  Routes, Route } from "react-router-dom";
import Homepage2 from "./Pages/StartingPage";
import Placeform from "./Booking_Pass/PlaceForm";
import BookingList from "./Booking/BookingList";
import Welcome from './Pages/Welcome'
import Login from "./Auth/Login";
import AuthForm from "./Auth/AuthForm";
import SignUp from "./Auth/SingUp";


function App() {
  return (
    <>
    
    <Routes>
         <Route path="/Login" element={<Login/>}/>
       <Route path="/Signup" element={<SignUp/>}/>
       <Route path="/AuthForm" element={<AuthForm/>}/>
       <Route path="/" element={<Welcome/>}/>
     <Route path="/Homepage/*" element={<Homepage2 />} />
       <Route path="/Placeform" element={<Placeform/>}/>
       <Route path="/BookingList" element={<BookingList/>}/>
        
      </Routes>
    </>
    
      
    
  );
}

export default App;

