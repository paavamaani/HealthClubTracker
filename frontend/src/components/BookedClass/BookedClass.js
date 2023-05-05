import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./BookedClass.module.css";

const BASE_URL = "http://localhost:3001";
const BOOKED_CLASS_API = "/booked-class";

function BookedClass() {
  const [bookedClasses, setBookedClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const email = localStorage.getItem("email");
      if (email) {
        const json = {
          "email": email
        };

        const response = await axios.post(`${BASE_URL}${BOOKED_CLASS_API}`, json);
        setBookedClasses(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Booked Classes</h2>
      <div className={styles.list}>
        {bookedClasses.map((dateTime) => (
          <div key={dateTime} className={styles.item}>
            <div className={styles.date}>{new Date(dateTime).toLocaleDateString()}</div>
            <div className={styles.time}>{new Date(dateTime).toLocaleTimeString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookedClass;
