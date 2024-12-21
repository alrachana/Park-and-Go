import React, { useState, useEffect } from "react";
import Navbar2 from '../NavBar/Navbar2'; // Navigation bar component
import "./BookingList.css"; // CSS file for styling
import { useNavigate } from "react-router-dom";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  // Fetch bookings from localStorage on component mount
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  // Navigate to the BookingList page (might be unnecessary here)
  useEffect(() => {
    navigate("/BookingList");
  }, [navigate]);

  // Helper function to check if exit time has passed
  const isExpired = (exitTime) => {
    const currentTime = new Date();
    const exitDateTime = new Date(exitTime);
    return currentTime > exitDateTime;
  };

  return (
    <>
      <Navbar2 />
      <div className="booking-container">
        <h1>Your Bookings</h1>
        {bookings.length === 0 ? (
          <p>No bookings available.</p>
        ) : (
          <table className="booking-table">
            <thead>
              <tr>
                <th>TICKET ID</th>
                <th>LICENSE PLATE</th>
                <th>PLACE</th>
                <th>ENTRY TIME</th>
                <th>EXIT TIME</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.ticketId}</td>
                  <td>{booking.licensePlate}</td>
                  <td>{booking.place}</td>
                  <td>{booking.entryTime}</td>
                  <td>{booking.exitTime}</td>
                  <td style={{ color: isExpired(booking.exitTime) ? "red" : "green" }}>
                    {isExpired(booking.exitTime) ? "Expired" : "Active"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="info">
          <p>* There is no need to print anything out! All your bookings are here.</p>
          <p>* Modern Parking lots are equipped with Automatic License Plate Recognition (ALPR).</p>
        </div>
      </div>
    </>
  );
};

export default BookingList;
