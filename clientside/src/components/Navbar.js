import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Wonkru Law-Care</div>
      <ul className="navbar-links">
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-actions">
        <Link className="btn-secondary" to="/get-started">Get Started</Link>
        <Link className="btn-primary" to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
