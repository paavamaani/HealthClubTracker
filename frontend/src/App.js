import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import { AuthProvider } from "./components/AuthContext/AuthContext";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AboutGym from "./components/AboutGym/AboutGym";
import BookClass from "./components/BookClass/BookClass";
import BookedClass from "./components/BookedClass/BookedClass";
import LogHours from "./components/LogHours/LogHours";
import Activities from "./components/Activities/Activities";
import Enroll from "./components/Enroll/Enroll";
import CheckInOut from "./components/CheckInOut/CheckInOut";
import FreeTrial from "./components/FreeTrial/FreeTrial";
import CancelFreeTrial from "./components/CancelFreeTrial/CancelFreeTrial";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<AboutGym />} />
          <Route path="/about" element={<AboutGym />} />
          <Route path="/book" element={<BookClass />} />
          <Route path="/booked" element={<BookedClass />} />
          <Route path="/log" element={<LogHours />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/checkinout" element={<CheckInOut />} />
          <Route path="/login" element={<Login />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/freetrial" element={<FreeTrial />} />
          <Route path="/cancelfreetrial" element={<CancelFreeTrial />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
