import { Fragment } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Setting.css"; // You'll need to create or copy styles
import songs from "../data/SongsData"; // Import the shared song data

export default function Setting() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const navigate = useNavigate(); // Declare useNavigate for routing

  // Split songs data into two categories
  const topSongs = songs.filter((song) => song.id <= 3); // First three songs
  const allSongs = songs.filter((song) => song.id > 3); // Remaining songs

  return (
    <>
      <p id="songs">Top Songs</p>
      <div className="containerTop">
        {topSongs.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
              onClick={() => navigate(`/song/${item.id}`)} // Navigate to SongDetail on click
            />
            {topSongs.length === index + 1 ? (
              <div style={{ marginRight: 40 }} />
            ) : null}
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="songs">All Songs</p>
          {allSongs.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                size={STAR_SIZE}
                color={STAR_COLOR}
                onClick={() => navigate(`/song/${item.id}`)} // Navigate to SongDetail on click
              />
              {allSongs.length === index + 1 && (
                <div style={{ marginBottom: 80 }} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
