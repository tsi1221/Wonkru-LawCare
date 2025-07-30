import React from "react";
import "../styles/About.css";

const contributors = [
  {
    name: "Temesegen Lule",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Tsehaynesh Biruh",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Asha Mahamed",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const About = () => {
  return (
    <div className="about-container">
      <h1>About Wonkru Law-Care</h1>
      <p>
        Wonkru Law-Care is a digital legal platform that empowers Ethiopian families with
        accessible, affordable family law services. Designed for low-bandwidth users and
        rural communities, we offer multilingual support and secure digital identity
        onboarding with Fayda.
      </p>

      <h2>Contributors</h2>
      <div className="contributors-list">
        {contributors.map((contributor) => (
          <div key={contributor.name} className="contributor-card">
            <img
              src={contributor.img}
              alt={contributor.name}
              className="contributor-img"
              loading="lazy"
            />
            <p className="contributor-name">{contributor.name}</p>
          </div>
        ))}
      </div>

      <h2>Hackathon Alignment</h2>
      <p>⚖️ SDG 16 - Peace, Justice & Strong Institutions</p>
    </div>
  );
};

export default About;
