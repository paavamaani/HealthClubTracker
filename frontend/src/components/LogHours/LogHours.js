import React, { useState } from "react";
import axios from "axios";
import styles from "./LogHours.module.css";

const BASE_URL = "http://localhost:3001";
const LOG_HOURS_API = "/log-hours";

function LogHours() {
  const [threadmill, setThreadmill] = useState(0);
  const [cycling, setCycling] = useState(0);
  const [stairMachines, setStairMachines] = useState(0);
  const [weightTraining, setWeightTraining] = useState(0);
  const email = localStorage.getItem("email");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const date = new Date().toISOString().split("T")[0];
    const data = {
      date,
      email,
      exercise: {
        threadmill: parseFloat(threadmill),
        cycling: parseFloat(cycling),
        stair_machines: parseFloat(stairMachines),
        weight_training: parseFloat(weightTraining),
      },
    };
    const response = await axios.post(`${BASE_URL}${LOG_HOURS_API}`, data);
    console.log(response.data);
  };

  return (
    <div className={styles.container}>
      <h2>Log Hours</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input}>
          <label htmlFor="threadmill">Threadmill (hours):</label>
          <input
            id="threadmill"
            type="number"
            step="0.1"
            value={threadmill}
            onChange={(event) => setThreadmill(event.target.value)}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="cycling">Cycling (hours):</label>
          <input
            id="cycling"
            type="number"
            step="0.1"
            value={cycling}
            onChange={(event) => setCycling(event.target.value)}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="stair-machines">Stair Machines (hours):</label>
          <input
            id="stair-machines"
            type="number"
            step="0.1"
            value={stairMachines}
            onChange={(event) => setStairMachines(event.target.value)}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="weight-training">Weight Training (hours):</label>
          <input
            id="weight-training"
            type="number"
            step="0.1"
            value={weightTraining}
            onChange={(event) => setWeightTraining(event.target.value)}
          />
        </div>
        <button type="submit" className={styles.button}>
          Log Hours
        </button>
      </form>
    </div>
  );
}

export default LogHours;
