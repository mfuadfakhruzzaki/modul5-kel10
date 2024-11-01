import { Fragment } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";
import movies from "../data/MoviesData"; // Import the shared movie data

export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const navigate = useNavigate(); // Declare useNavigate for routing

  // Split movies data into two categories
  const poster = movies.filter((movie) => movie.id <= 3); // First three movies
  const data = movies.filter((movie) => movie.id > 3); // Remaining movies

  return (
    <>
      <p id="movies">Top Movies</p>
      <div className="containerTop">
        {poster.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
              onClick={() => navigate(`/movie/${item.id}`)} // Navigate to MovieDetail on click
            />
            {poster.length === index + 1 ? (
              <div style={{ marginRight: 40 }} />
            ) : null}
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="movies">All Movies</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                size={STAR_SIZE}
                color={STAR_COLOR}
                onClick={() => navigate(`/movie/${item.id}`)} // Navigate to MovieDetail on click
              />
              {data.length === index + 1 && (
                <div style={{ marginBottom: 80 }} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
