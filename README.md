# Wonkru-LawCare
📅 Project Title: Wonkru Law-Care

👥 Contributors

🧑‍💻🧑‍💻 Temesegen Lule

🧑‍💻🧑‍💻 Tsehaynesh Biruh

🧑‍💻🧑‍💻 Asha Mahamed

🔢 Project Synopsis

🔍 Problem Statement

In Ethiopia, millions of families face significant barriers to accessing reliable, affordable, and timely legal support, especially for family law matters such as divorce, child custody, inheritance disputes, and estate planning. The legal system is often prohibitively expensive, complex, and inaccessible, especially for middle-income households and those in rural or remote areas.

Key issues include:

High legal fees relative to average income

Lack of legal access in rural areas

Paper-based, complex processes

No digital-first platforms tailored to family law

These factors leave families vulnerable to unresolved legal issues, missed deadlines, and emotional distress, worsening inequalities and eroding trust in the justice system.

💡 Planned Solution

Wonkru Law-Care is a subscription-based legal platform offering affordable, continuous legal counsel and representation for family law matters via mobile and web apps. Key features:

✅ Dedicated Family Lawyer: Each family is matched with a licensed lawyer for ongoing support.

✅ Zoom Meeting Integration: Enables remote consultations.

✅ Secure One-to-One Chat: For real-time communication and document sharing.

✅ Notification System: Automated SMS and app reminders for court dates, filings, etc.

✅ Document Templates: Legal forms for divorce, wills, custody agreements.

✅ Offline & Low Bandwidth Mode: Optimized for rural users.

✅ Fayda Digital ID Integration: For secure onboarding, document signing, and legal authentication.

The solution is user-friendly, multilingual (Amharic, Oromo, Tigrinya, English), and includes Telegram bot support for frequently asked questions.

🎯 Expected Outcome

Metric                          Target (Year 1)

Users Served                    2,300+ families

Legal Cost Savings              80% compared to traditional services

Rural User Share                40%

Case Resolution Time            Reduced by 50%

Long-term vision                Expand to Kenya and Rwanda by 2026

Partner with e-court systems for seamless digital filings

🛠 Tech Stack

📈 Frontend

Flutter: Cross-platform mobile/web development with offline support.

Figma: UI/UX design tested with target users.

📊 Backend

Firebase:

Authentication (w/ Fayda ID)

Firestore: Real-time document and chat storage

Cloud Functions: Notifications engine

FCM: Push notifications

Storage: Legal documents, templates, uploads

Node.js + Express.js:

API endpoints

Zoom SDK integration

Real-time chat via WebSocket

📞 Communication & Identity

Zoom SDK: Consultation scheduling and meetings

Fayda Digital ID: Biometric onboarding and document signing

WebSocket: Real-time chat

Telegram API: Support bot and updates

Twilio (Optional): SMS alerts for non-smartphone users

📆 Other Tools

Git & GitHub: Version control

Google Docs: Template repository

🧰 Fayda's Role (Optional but Recommended)

Wonkru Law-Care integrates Fayda Digital ID to ensure:

✅ Secure onboarding via biometric verification

✅ Document authentication (e.g., wills, custody filings)

✅ Trust-building in legal interactions and document handling

✅ Future-proofing through potential court integration

This enhances credibility, security, and aligns with Ethiopia’s digital governance strategy.

🏠 Uniqueness in Ethiopia

Wonkru Law-Care stands out in the Ethiopian legal landscape through its laser focus on family law, addressing critical issues like divorce, child custody, inheritance, and domestic abuse. Unlike traditional legal firms or broader platforms like Ethio Legal Shield, Wonkru delivers personalized, accessible, and proactive legal care.
✅ Key Differentiators:

    🎯 Primary Focus: Unlike generalist legal services, Wonkru is tailored specifically for family law—the area most underserved and emotionally charged.

    📱 24/7 Digital Access: It provides round-the-clock legal support via mobile and web apps, breaking the time and location barriers seen with urban-centered traditional firms.

    💳 Subscription-Based Model: Wonkru uses a predictable monthly or annual payment system, unlike the expensive and uncertain billing of pay-per-case models. This encourages continuous legal care rather than reactive case-by-case intervention.

    🧑‍⚖️ Dedicated Legal Partner: Each client is matched with a long-term family lawyer, fostering trust and familiarity over time—something both traditional firms and Ethio Legal Shield lack.

    🌐 Rural & Offline Support: Wonkru is built to function in low-connectivity zones, enabling rural families to access justice even without consistent internet—unlike competitors which remain largely urban-focused.

    🪪 Fayda Digital ID Integration: It supports instant, secure onboarding and e-signing using Ethiopia’s Fayda ID, making it a pioneer in digital legal identity integration.

    📄 Legal Literacy & DIY Tools: Users benefit from in-app legal education, pre-filled template generators, and guidance on rights—empowering them to handle minor legal tasks independently.

    🚨 Emergency Legal Response: In crises like abuse or custody battles, Wonkru offers rapid legal intervention, contrasting with traditional systems that require slow appointments and paperwork.

    🔐 Security & Trust: All communications are encrypted and identity-verified, ensuring confidentiality—especially critical in sensitive family matters.

    🌍 Social Impact & Scalability: Designed with a pan-Ethiopian and regional vision, Wonkru aims to scale its impact across East Africa, tackling systemic legal exclusion.

✅Zoom Integration 

✅Real-time Chat

✅Subscription Pricing

✅ (Corp only)

✅Fayda ID Integration

✅Low-bandwidth Optimization

📍 Why Wonkru Law-Care Stands Out

✔️ First legal platform in Ethiopia focused on affordable family law

✔️ Combines Zoom, Chat, Templates, Fayda ID into one solution

✔️ Optimized for low-connectivity rural areas

✔️ Offers a scalable, impact-driven model for East Africa

🗓️ Hackathon Alignment

🤝Supports SDG 16: Peace, Justice & Strong Institutions

🤝Uses Ethiopian Digital Identity (Fayda) to drive inclusion

🤝Designed for social impact and legal system reform

🤝Reinforces rule of law by improving access to timely, affordable, and expert family law services

🤝Aligns with digital public infrastructure goals by utilizing Fayda and enabling e-justice integration

🤝Supports gender equality and child protection through easier access to custody and protection orders

🤝Encourages youth and women participation in legal empowerment via community outreach and multilingual access

🤝Bridges the urban-rural divide in legal access through tech-based low-bandwidth solutions

🤝Builds public trust in digital legal platforms and fosters data integrity through secure document handling and biometric authentication




//////////////////////////////////////////////////////////////////////////////////////////////




Wonkru-LawCare

A digital legal service platform integrating Fayda OIDC authentication, with backend and frontend applications dockerized for easy deployment.
Features

    User authentication via Fayda OpenID Connect (OIDC) integration

    Backend REST API built with Node.js, Express, MongoDB, JWT auth

    Frontend React application with user login and dashboard

    Dockerized setup with docker-compose for quick local deployment

    Prerequisites

    Docker & Docker Compose installed (Install Docker)

    Git installed (Install Git)
    Installation and Setup
1. Clone the repository

git clone https://github.com/tsi1221/Wonkru-LawCare.git
cd Wonkru-LawCare

2. Create environment file for backend

Create a .env file inside the BACKEND-FAYDA-AUTH directory with:  . Build and run with Docker Compose

Run the following command to build the images and start the containers:

docker-compose up --build

    Backend API will be available at: http://localhost:3001

    Frontend React app will be available at: http://localhost:3000

4. Access the application

    Open http://localhost:3000 in your browser

    Use the Fayda OAuth login to authenticate

    The backend will handle user authentication and session management

Running Locally Without Docker (Optional)
Backend

cd BACKEND-FAYDA-AUTH
npm install
npm start

Frontend

cd clientside
npm install
npm start

Dockerfile & docker-compose Overview

    BACKEND-FAYDA-AUTH/Dockerfile — Builds the backend Node.js app

    clientside/Dockerfile — Builds the React frontend app

    docker-compose.yml — Defines services for backend, frontend, and MongoDB