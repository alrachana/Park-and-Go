import React from "react";
import {  Routes, Route } from "react-router-dom";
import SearchBar from "../HomePage/SearchFormPage";
import Placeform from "../Booking_Pass/PlaceForm";

function Homepage2() {
  return (
    
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/Placeform" element={<Placeform />} />
      </Routes>
    
  );
}

export default Homepage2;