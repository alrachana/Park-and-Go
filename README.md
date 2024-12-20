# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import React from "react";
import {Routes, Route } from "react-router-dom";
import SearchBar from "../HomePage/SearchForm";
import Placeform from "../Booking_Pass/PlaceForm";

const [bookings, setBookings] = useState([]);

    // // Function to add a new booking to the list
    // const addBooking = (newBooking) => {
    //   setBookings((prevBookings) => [...prevBookings, newBooking]);


    {/* <SearchBar addBooking={addBooking} />
    <BookingList bookings={bookings} /> */}