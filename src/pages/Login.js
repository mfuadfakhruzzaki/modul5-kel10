// src/pages/Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import file CSS baru

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Mengirim permintaan POST ke endpoint login baru
      const response = await axios.post("https://fuadfakhruz.blog/auth/login", {
        email,
        password,
      });

      // Memeriksa apakah login berhasil
      if (response.data && response.data.data && response.data.data.token) {
        // Simpan token dan email ke state dan localStorage
        const token = response.data.data.token;
        setUser({ email, token });
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        navigate("/movie");
      } else {
        setError("Login gagal. Silakan coba lagi.");
      }
    } catch (err) {
      // Menangani kesalahan login
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Terjadi kesalahan. Silakan coba lagi.");
      }
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              placeholder="Masukkan email Anda"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              placeholder="Masukkan password Anda"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
