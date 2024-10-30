import React from "react";
import { useParams } from "react-router-dom";
import movies from "../data/MoviesData"; // Import the shared movie data
import "./Detail.css";

export default function Detail() {
  const { id } = useParams(); // Get the movie id from the URL
  const movie = movies.find((movie) => movie.id === parseInt(id, 10)); // Convert id to number before comparison

  if (!movie) {
    return (
      <div className="detail-container">
        <h2 className="detail-title">Movie Not Found</h2>
        <p className="detail-description">
          The movie you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <h1 className="detail-title">{movie.title}</h1>
      <img src={movie.img} alt={movie.title} className="detail-img" />
      <p className="detail-year">Year: {movie.year}</p>
      <p className="detail-genre">Genre: {movie.genre}</p>
      <p className="detail-description">{movie.description}</p>
    </div>
  );
}
