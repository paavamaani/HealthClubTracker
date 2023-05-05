import React, { useState } from "react";
import styles from "./CheckInOut.module.css";
import axios from "axios";

const BASE_URL = "http://localhost:3001";
const CHECK_IN_OUT_API = "/check-in-out";

function CheckInOut() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = localStorage.getItem("email");
    if (email && checkIn && checkOut) {
      const json = {
        email,
        checkin: new Date(checkIn).toLocaleString(),
        checkout: new Date(checkOut).toLocaleString(),
        total: 1,
      };
      try {
        await axios.post(`${BASE_URL}${CHECK_IN_OUT_API}`, json);
        alert("Check in/out submitted successfully!");
        setCheckIn("");
        setCheckOut("");
      } catch (error) {
        alert("Error submitting check in/out!");
      }
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Check In/Out</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="checkin">Check In:</label>
          <input
            type="datetime-local"
            id="checkin"
            value={checkIn}
            onChange={(event) => setCheckIn(event.target.value)}
            max={new Date().toISOString().slice(0, 16)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="checkout">Check Out:</label>
          <input
            type="datetime-local"
            id="checkout"
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
            max={new Date().toISOString().slice(0, 16)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}

export default CheckInOut;
