import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./BookClass.module.css";

const BASE_URL = "http://localhost:3001";
const ABOUT_GYM_API = "/aboutgym";

function BookClass() {
  const [intervals, setIntervals] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState(null);
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const city = localStorage.getItem("city") || "";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}${ABOUT_GYM_API}/${city}`);
      const { info } = response.data;
      const intervals = info.cities.flatMap((city) =>
        city.intervals.flatMap((interval) => {
          const slots = [];
          let hour = parseInt(interval.start);
          while (hour < parseInt(interval.end)) {
            slots.push({
              ...interval,
              city: city.city,
              start: hour,
              end: hour + 1,
            });
            hour++;
          }
          return slots;
        })
      );
      setIntervals(intervals);
    };
    if (city) {
      fetchData();
    }
  }, [city]);

  const handleIntervalClick = (interval) => {
    setSelectedInterval(interval);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    localStorage.setItem("email", email);
  };

  const handleBookClass = async () => {
    if (!selectedInterval || !email) {
      return;
    }
    const dateTime = new Date(selectedInterval.date);
    dateTime.setHours(parseInt(selectedInterval.start));
    const response = await axios.post(`${BASE_URL}/book-class`, {
      email,
      time: dateTime.toLocaleString(),
    });
    console.log(response.data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <label htmlFor="city">City:</label>
        <span>{city}</span>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={email} onChange={handleEmailChange} disabled />
      </div>
      <div className={styles.intervals}>
        {intervals.map((interval) => (
          <div
            key={`${interval.city}-${interval.date}-${interval.start}`}
            className={`${styles.interval} ${
              selectedInterval === interval ? styles.selected : ""
            }`}
            onClick={() => handleIntervalClick(interval)}
          >
            <div className={styles.date}>{interval.date}</div>
            <div className={styles.time}>
              {interval.start}:00 - {interval.end}:00
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleBookClass}>Book Class</button>
    </div>
  );
}

export default BookClass;
