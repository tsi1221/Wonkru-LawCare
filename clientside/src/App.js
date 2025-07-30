import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./components/auth/Signup";
import LoginForm from "./components/auth/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm/>} />
         <Route path="/signup" element={<Signup />} />
       {/* <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/resources" element={<div>Resources Page</div>} />
        <Route path="/about" element={<div>About Us Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;