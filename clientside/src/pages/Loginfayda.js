import React from 'react';
import '../styles/Loginfayda.css';

function generateCodeVerifier() {
  const array = new Uint8Array(32);
  window.crypto.getRandomValues(array);
  return btoa(String.fromCharCode.apply(null, array))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

async function generateCodeChallenge(verifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(digest));
  const base64 = btoa(String.fromCharCode(...hashArray));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function handleLoginfayda() {
  const verifier = generateCodeVerifier();
  const challenge = await generateCodeChallenge(verifier);
  localStorage.setItem('code_verifier', verifier);

  const client_id = "crXYIYg2cJiNTaw5t-peoPzCRo-3JATNfBd5A86U8t0";
  const redirect_uri = "http://localhost:3000/callback";
  const state = crypto.randomUUID();
  const scope = "openid profile email";
  const acr = "mosip:idp:acr:generated-code";

  const authUrl =
    `https://esignet.ida.fayda.et/authorize?` +
    `client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent(redirect_uri)}` +
    `&scope=${encodeURIComponent(scope)}&state=${state}` +
    `&code_challenge=${challenge}&code_challenge_method=S256&acr_values=${acr}`;

  window.location.href = authUrl;
}

function Loginfayda() {
  return (
    <div className="login-container">
    

      <div className="login-content">
        <h1>Securely sign in with Fayda</h1>
        <p>
          Fayda is a secure, government-backed authentication method that protects your personal information.
        </p>
        <img
          src="https://www.fsxbusiness.com/s/faydaimage.jpg"
          alt="Fayda Badge"
          className="badge-img"
        />

        <div className="steps">
          <p>1. <strong>Log in with Fayda</strong> – You’ll be redirected to Fayda’s secure login page.</p>
          <p>2. <strong>Verify your identity</strong> – Fayda verifies your identity using your government-issued credentials.</p>
          <p>3. <strong>Access your account</strong> – Once verified, you’ll be securely logged into Wonkru Law-Care.</p>
        </div>

        <button className="continue-btn" onClick={handleLoginfayda}>
          Continue with Fayda
        </button>
      </div>
    </div>
  );
}

export default Loginfayda;
