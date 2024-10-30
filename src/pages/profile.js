// src/pages/Profile.js
import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance"; // Import axios instance
import "./Profile.css";

export default function Profile({ user, setUser }) {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get("/api/users/profile"); // Endpoint API baru
        if (response.data && response.data.profile) {
          setProfile(response.data.profile);
        } else {
          setError("Profil tidak ditemukan.");
        }
      } catch (err) {
        setError(err.response?.data?.message || "Gagal mengambil data profil.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  if (loading) {
    return (
      <div className="profile-container">
        <h1 className="profile-title">Profile</h1>
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <h1 className="profile-title">Profile</h1>
        <p className="profile-error">{error}</p>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-card">
        <img
          src={profile.profile_picture}
          alt="Avatar"
          className="profile-avatar"
        />
        <div className="profile-details">
          <h2 className="profile-username">{profile.username}</h2>
          <p className="profile-email">{profile.email}</p>
        </div>
      </div>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}
