import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();

  // Anda dapat mengganti data berikut dengan fetch data dari API atau dari state global
  const movieData = {
    1: {
      title: "John Wick",
      genre: "Action, Crime",
      description: "An ex-hitman comes out of retirement...",
    },
    2: {
      title: "Oppenheimer",
      genre: "Biography, Drama, History",
      description: "The story of J. Robert Oppenheimer...",
    },
  };

  const movie = movieData[id];

  return (
    <div>
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <p>Genre: {movie.genre}</p>
          <p>Description: {movie.description}</p>
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
}
