import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
        <Route path="/services" element={<Services/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
    </Router>
  );
}

export default App;