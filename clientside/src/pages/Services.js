import React from "react";
import "../styles/Services.css"; // ✅ updated to match the file name

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Legal Services</h1>
        <p>Empowering families with accessible, reliable, and secure legal assistance.</p>
      </div>

      <div className="services-list">
        <div className="service-item">
          <h3>Dedicated Family Lawyer</h3>
          <p>Get expert advice tailored to your specific legal situation.</p>
        </div>
        <div className="service-item">
          <h3>Zoom Meeting Integration</h3>
          <p>Book and attend virtual consultations with legal professionals.</p>
        </div>
        <div className="service-item">
          <h3>Secure One-to-One Chat</h3>
          <p>Chat privately with your assigned lawyer in real-time.</p>
        </div>
        <div className="service-item">
          <h3>Court Date Notifications</h3>
          <p>Receive timely reminders and updates for important court sessions.</p>
        </div>
        <div className="service-item">
          <h3>Legal Document Templates</h3>
          <p>Access downloadable, customizable legal forms and documents.</p>
        </div>
        <div className="service-item">
          <h3>Offline & Low Bandwidth Support</h3>
          <p>Use essential features even in areas with poor internet access.</p>
        </div>
        <div className="service-item">
          <h3>Fayda Digital ID Integration</h3>
          <p>Verify and manage your identity with Ethiopia’s national ID system.</p>
        </div>
        <div className="service-item">
          <h3>Multilingual Platform</h3>
          <p>Available in Amharic, Afaan Oromo, Tigrinya, and English.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
