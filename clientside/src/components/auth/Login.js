import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic front-end validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");

    // TODO: Implement login API call here
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-content" role="main" aria-label="Login form">
        <h2>Welcome back</h2>
        <form onSubmit={handleSubmit} noValidate>
          {error && <div className="error-message" role="alert">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <div className="form-extra">
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="login-btn" aria-label="Log in">
            Log In
          </button>

          <p className="separator-text">Or continue with</p>

          <button
            type="button"
            className="fayadigital-btn"
            onClick={() => alert("FaydaDigital login not implemented yet")}
            aria-label="Log in with FaydaDigital ID"
          >
            Log in with FaydaDigital ID
          </button>

          <p className="signup-redirect">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
