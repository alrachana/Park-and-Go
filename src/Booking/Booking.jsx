import React from "react";
import {  Routes, Route } from "react-router-dom";

import BookingList from "./BookingList";

function Bookings() {
  return (
    
      <Routes>
        
        <Route path="/BookingList" element={<BookingList />} />
      </Routes>
    
  );
}

export default Bookings;
