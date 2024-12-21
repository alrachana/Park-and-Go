import React from "react";
import { useLocation } from "react-router-dom";
import './PlaceFlow.css';

import BasicPassForm from "./BookingPass"; 
import Navbar2 from "../NavBar/Navbar2";

const Placeform = () => {
  const location = useLocation();
  const { selectedImage } = location.state || {}; 

  console.log("Received Image Data:", selectedImage);

  return (
    <div className="main1">
      <Navbar2 />
      <h1>Booking Form</h1>
      <div className="selected-details">
        {selectedImage ? (
          <>
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.about}</p>
            <BasicPassForm />
          </>
        ) : (
          <p>No image selected. Please go back and select an image.</p>
        )}
      </div>
    </div>
  );
};

export default Placeform;
