import React from "react";
import { useParams } from "react-router-dom";
import songs from "../data/SongsData"; // Import the shared song data

export default function SongDetail() {
  const { id } = useParams(); // Get the song id from the URL
  const song = songs.find((song) => song.id === parseInt(id, 10)); // Find the song by id

  if (!song) {
    return (
      <div>
        <h2>Song Not Found</h2>
        <p>The song you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="song-detail">
      <h1>{song.title}</h1>
      <img src={song.img} alt={song.title} className="song-img" />
      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      <p>Year: {song.year}</p>
      <p>Description: {song.description}</p>
    </div>
  );
}
