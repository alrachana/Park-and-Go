import React from "react";


import { Routes, Route } from "react-router-dom";
import SearchBar from "../HomePage/SearchForm";
import Placeform from "../Booking_Pass/PlaceForm";
import Navbar2 from "../NavBar/Navbar2";
import BookingList from "./BookingList";

const BookingFile=()=>{
    return(
        <>
        <Navbar2/><br/>
        <Routes>
            <Route path="/" element={<SearchBar/>}></Route>
            <Route path="/Placeform" element={<Placeform/>}></Route>
            
        </Routes>
        </>
    )
}

export default BookingFile;