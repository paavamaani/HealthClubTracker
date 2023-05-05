import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./AboutGym.module.css"; // import CSS module

import Dropdown from "../Dropdown/Dropdown";

const BASE_URL = "http://localhost:3001";
const ABOUT_GYM_API = "/aboutgym";

function AboutGym() {
  const [gymData, setGymData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = (value) => {
    setSelectedOption(value);
  };

  const cities = [
    { value: "San Jose", label: "San Jose" },
    { value: "San Francisco", label: "San Francisco" },
    { value: "Los Angeles", label: "Los Angeles" },
  ];

  useEffect(() => {
      axios.get(BASE_URL + ABOUT_GYM_API + `/${selectedOption}`)
        .then(response => {
          setGymData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [selectedOption]);

  if (!gymData) {
    return <Dropdown name="cities" label="Select city" options={cities} onNext={handleNext} />
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Gym Memberships</h2>
      <ul className={styles.list}>
        {gymData.info.memberships.map(membership => (
          <li key={membership.type} className={styles.listItem}>
            {membership.type}: {membership.price}
          </li>
        ))}
      </ul>
      <h2 className={styles.heading}>Gym Locations and Schedule</h2>
      <ul className={styles.list}>
        {gymData.info.cities.map(city => (
          <li key={city.city} className={styles.listItem}>
            <h3 className={styles.subheading}>{city.city}</h3>
            <ul className={styles.sublist}>
              {city.intervals.map(interval => (
                <li
                  key={`${interval.date}-${interval.start}-${interval.end}`}
                  className={styles.sublistItem}
                >
                  {interval.date} ({interval.start} - {interval.end})
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutGym;