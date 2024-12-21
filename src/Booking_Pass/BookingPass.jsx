import React, { useState } from "react";
import "./Bookingpass.css";

const BasicPassForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    phone: "",
    vehicleModel: "",
    licensePlate: "",
    entryTime: "",
    exitTime: "",
    netAmount: null,
  });

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState(null);

  const pricePerHour = 1.05; // Price per hour in USD

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateNetAmount = () => {
    const entryTime = new Date(formData.entryTime);
    const exitTime = new Date(formData.exitTime);

    if (entryTime && exitTime && exitTime > entryTime) {
      const hours = Math.abs(exitTime - entryTime) / 36e5;
      return (hours * pricePerHour).toFixed(2);
    }
    return 0;
  };

  const handleConfirm = () => {
    const netAmount = calculateNetAmount();
    setFormData({ ...formData, netAmount });
    setIsConfirmed(true);
  };

  const generateTicketId = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let ticketId = "";
    for (let i = 0; i < 6; i++) {
      ticketId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return ticketId;
  };

  // Place your handleSubmit function here
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicketId = generateTicketId();
    setTicketId(newTicketId);

    const netAmount = calculateNetAmount();

    const bookingDetails = {
      ticketId: newTicketId,
      licensePlate: formData.licensePlate,
      place: formData.city,
      entryTime: formData.entryTime,
      exitTime: formData.exitTime,
      netAmount,
    };

    // Save to localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const updatedBookings = [...existingBookings, bookingDetails];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    alert(`Your booking is successful. Ticket ID: ${newTicketId}`);
    setIsSubmitted(true);

    // Clear form
    setFormData({
      fullName: "",
      city: "",
      phone: "",
      vehicleModel: "",
      licensePlate: "",
      entryTime: "",
      exitTime: "",
      netAmount: null,
    });

    // Hide confirmation after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setTicketId(null);
    }, 3000);
  };
  
  return (
    <div className="form-container">
      <h2>Basic Pass</h2>
      <p>Single entry and exit</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="vehicleModel"
          placeholder="Vehicle Model"
          value={formData.vehicleModel}
          onChange={handleChange}
        />

        <input
          type="text"
          name="licensePlate"
          placeholder="License Plate"
          value={formData.licensePlate}
          onChange={handleChange}
        />

        <input
          type="datetime-local"
          name="entryTime"
          value={formData.entryTime}
          onChange={handleChange}
        />

        <input
          type="datetime-local"
          name="exitTime"
          value={formData.exitTime}
          onChange={handleChange}
        />

        {isConfirmed ? (
          <div>
            <p>Net Amount: ${formData.netAmount}</p>
            <button type="submit">Submit</button>
          </div>
        ) : (
          <button type="button" onClick={handleConfirm}>
            Confirm
          </button>
        )}
      </form>
      {isSubmitted && (
        <div className="alert">
          <p>Booking Successful!</p>
          <p>Your Ticket ID: {ticketId}</p>
        </div>
      )}
    </div>
  );
};

export default BasicPassForm;
