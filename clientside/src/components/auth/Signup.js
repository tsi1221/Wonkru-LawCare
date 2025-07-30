import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    // You can add more validation like email format, password strength, etc.

    setError("");

    // TODO: Implement API call to register user here
    console.log("Registering user:", { name, email, password, role });
  };

  return (
    <div className="signup-container">
      <div className="signup-content" role="main" aria-label="Signup form">
        <h2>Create an Account</h2>

        <form onSubmit={handleSubmit} noValidate>
          {error && <div className="error-message" role="alert">{error}</div>}

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>

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
              autoComplete="new-password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="user">User</option>
              <option value="lawyer">Lawyer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="signup-btn" aria-label="Sign Up">
            Sign Up
          </button>
        </form>

        <p className="login-redirect">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
