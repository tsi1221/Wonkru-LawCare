import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Wonkru Law-Care</div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={menuOpen ? "bar change" : "bar"}></div>
          <div className={menuOpen ? "bar change" : "bar"}></div>
          <div className={menuOpen ? "bar change" : "bar"}></div>
        </div>

        <ul className={menuOpen ? "navbar-links active" : "navbar-links"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
         
        </ul>

        <div className="navbar-actions">
          <Link className="btn-primary" to="/login">Login</Link>
          <Link className="btn-primary" to="/signup">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
