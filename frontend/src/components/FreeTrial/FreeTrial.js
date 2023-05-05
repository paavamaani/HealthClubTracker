import React, { useState } from "react";
import axios from "axios";
import styles from "./FreeTrial.module.css";

const BASE_URL = "http://localhost:3001";
const FREE_TRIAL_API = "/free-trial";

function FreeTrial() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}${FREE_TRIAL_API}`, {
        email,
        password,
      });
      console.log(response.data);
      setEmail("");
      setPassword("");
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>FreeTrial</h2>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit" className={styles.button}>
          FreeTrial
        </button>
      </form>
    </div>
  );
}

export default FreeTrial;
