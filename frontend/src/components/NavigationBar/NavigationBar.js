import { Link, NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

import { useAuth } from "../AuthContext/AuthContext";

function NavigationBar() {
  const email = localStorage.getItem("email");
  const isAdmin = email === "admin@gmail.com";
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.container}>
      {isLoggedIn ? (
        isAdmin ? (
          // Admin navigation links
          <>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/about" className={styles.link}>About Gym</Link>
            <Link to="/enroll" className={styles.link}>Enroll New Member</Link>
            <Link to="/freetrial" className={styles.link}>Activate Free Trial</Link>
            <Link to="/cancelfreetrial" className={styles.link}>Cancel Free Trial</Link>
            <Link to="/logout" className={styles.link}>Logout</Link>
          </>
        ) : (
          // User navigation links
          <>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/about" className={styles.link}>About Gym</Link>
            <Link to="/book" className={styles.link}>Book a Class</Link>
            <Link to="/booked" className={styles.link}>Booked Classes</Link>
            <Link to="/log" className={styles.link}>Log Hours</Link>
            <Link to="/activities" className={styles.link}>Activities</Link>
            <Link to="/checkinout" className={styles.link}>Check In/Out</Link>
            <Link to="/logout" className={styles.link}>Logout</Link>
          </>
        )
      ) : (
        // Navigation links for non-logged-in users
        <>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/about" className={styles.link}>About Gym</Link>
          <Link to="/login" className={styles.link}>Login</Link>
        </>
      )}
    </nav>
  );
}

export default NavigationBar;
