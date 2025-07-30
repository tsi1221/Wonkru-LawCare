import React from "react";
import "../styles/Resources.css";

const Resources = () => {
  return (
    <div className="resources-container">
      <div className="resources-header">
        <h1>Legal Resources</h1>
        <p>Empower yourself with downloadable templates and digital tools tailored for your legal needs.</p>
      </div>

      <div className="resources-list">
        <div className="resource-item">
          <h3>Divorce Form Template</h3>
          <p>A ready-to-use form to initiate divorce proceedings.</p>
        </div>
        <div className="resource-item">
          <h3>Will Template</h3>
          <p>Plan your estate and protect your loved ones with a customizable will template.</p>
        </div>
        <div className="resource-item">
          <h3>Child Custody Agreement</h3>
          <p>Outline custody arrangements with this clear and editable agreement form.</p>
        </div>
        <div className="resource-item">
          <h3>Property Transfer & Inheritance Forms</h3>
          <p>Legally document the transfer of property or inheritance between family members.</p>
        </div>
        <div className="resource-item">
          <h3>Telegram FAQ Bot</h3>
          <p>Get instant answers to legal questions through our dedicated Telegram Bot.</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
