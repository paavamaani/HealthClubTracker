import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css';
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const BASE_URL = 'http://localhost:3001';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { email, password });
      if (response.status === 200) {
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('city', response.data.city);
        login(response.data.email);
        navigate('/'); // Redirect to the desired page after login
      } else {
        alert('There was an error logging in. Please try again.');
      }
    } catch (error) {
      alert('There was an error logging in. Please try again.');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <input
        className={styles.input}
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email Address"
      />
      <input
        className={styles.input}
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <button className={styles.button} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
