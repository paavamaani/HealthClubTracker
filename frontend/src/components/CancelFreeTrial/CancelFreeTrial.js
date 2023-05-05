import React, { useState } from 'react';
import axios from 'axios';
import styles from './CancelFreeTrial.module.css';

const BASE_URL = 'http://localhost:3001';

const CancelFreeTrial = () => {
  const [email, setEmail] = useState('');

  const handleCancel = async () => {
    try {
      await axios.post(`${BASE_URL}/cancel-free-trial`, { email });
      alert('Your free trial has been cancelled.');
    } catch (error) {
      alert('There was an error cancelling your free trial.');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h2>Cancel Free Trial</h2>
      <p>Enter your email address to cancel your free trial:</p>
      <input
        className={styles.input}
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email Address"
      />
      <button className={styles.button} onClick={handleCancel}>
        Cancel Free Trial
      </button>
    </div>
  );
};

export default CancelFreeTrial;
