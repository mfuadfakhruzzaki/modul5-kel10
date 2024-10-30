// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Password tidak digunakan dalam contoh ini
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Mengambil daftar pengguna dari API
      const response = await axios.get("https://reqres.in/api/users?page=2");
      const users = response.data.data;

      // Mencocokkan email yang dimasukkan dengan daftar pengguna
      const user = users.find((user) => user.email === email);

      if (user) {
        // Simulasi login berhasil
        setUser(user);
        history.push("/users");
      } else {
        setError("Email tidak ditemukan.");
      }
    } catch (err) {
      setError("Terjadi kesalahan. Silakan coba lagi.");
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px",
    backgroundColor: "#28a745",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "3px",
  },
  error: {
    color: "red",
    marginBottom: "15px",
  },
};

export default Login;
