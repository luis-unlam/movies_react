import { MovieCard } from "./MovieCard";
import movies from "./movies.json";

export function MoviesGrid() {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
        //<li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
