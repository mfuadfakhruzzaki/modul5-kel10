// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup, MdSettings, MdSearch } from "react-icons/md";
import "./App.css";
import Movie from "./pages/movie";
import Profile from "./pages/profile"; // Pastikan penamaan konsisten
import Setting from "./pages/setting"; // Import Setting component
import Search from "./pages/Search"; // Import Search component
import BookDetail from "./pages/BookDetail"; // Import BookDetail component
import Detail from "./pages/Detail"; // Import Movie Detail
import Login from "./pages/Login"; // Import Login component

function App() {
  const [user, setUser] = useState(() => {
    // Mengambil token dan email dari localStorage jika ada
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    return token && email ? { email, token } : null;
  });

  useEffect(() => {
    if (user && user.token) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("email", user.email);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    }
  }, [user]);

  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 10</p>
      </header>
      <Routes>
        <Route
          path="/login"
          element={
            !user ? <Login setUser={setUser} /> : <Navigate to="/movie" />
          }
        />
        <Route
          path="/movie"
          element={user ? <Movie /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={
            user ? (
              <Profile user={user} setUser={setUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/setting"
          element={user ? <Setting /> : <Navigate to="/login" />}
        />
        <Route
          path="/search"
          element={user ? <Search /> : <Navigate to="/login" />}
        />
        <Route
          path="/movie/:id"
          element={user ? <Detail /> : <Navigate to="/login" />}
        />
        <Route
          path="/book/:id"
          element={user ? <BookDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={<Navigate to={user ? "/movie" : "/login"} />}
        />
      </Routes>
      {user && (
        <footer>
          <NavLink
            to="/movie"
            className={({ isActive }) =>
              isActive ? "iconWrapper active" : "iconWrapper"
            }
          >
            <HiHome className="icon" /> Movie
          </NavLink>
          <NavLink
            to="/setting"
            className={({ isActive }) =>
              isActive ? "iconWrapper active" : "iconWrapper"
            }
          >
            <MdSettings className="icon" /> Lagu
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "iconWrapper active" : "iconWrapper"
            }
          >
            <MdSearch className="icon" /> Buku
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "iconWrapper active" : "iconWrapper"
            }
          >
            <MdGroup className="icon" /> Profile
          </NavLink>
        </footer>
      )}
    </BrowserRouter>
  );
}

export default App;
