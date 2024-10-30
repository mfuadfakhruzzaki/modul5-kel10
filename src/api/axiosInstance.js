// src/api/axiosInstance.js
import axios from "axios";

// Membuat instance axios
const axiosInstance = axios.create({
  baseURL: "https://fuadfakhruz.blog/", // Base URL API Anda
});

// Menambahkan interceptor untuk menyisipkan token ke header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Mengambil token dari localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
