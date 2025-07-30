import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>
          <span className="contact-icon">✉️</span>
          Email: support@wonkrulawcare.com
        </p>
        <p>
          <span className="contact-icon">📱</span>
          Telegram: @WonkruLegalBot
        </p>
        <p>
          <span className="contact-icon">📞</span>
          Phone: +251-928-50-59-04
        </p>
        <p>
          <span className="contact-icon">🏢</span>
          Office: Addis Ababa, Ethiopia
        </p>
      </div>
    </div>
  );
};

export default Contact;