import React from "react";
import heroImage from "../assets/hero.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src={heroImage} alt="Family law support" className="hero-image" />
        <div className="hero-overlay">
          <h1>Affordable Family Law Support,<br />Anytime, Anywhere</h1>
          <p>Connect with experienced family law professionals and access resources tailored to your needs, all within a secure and supportive environment.</p>
          <button className="hero-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
