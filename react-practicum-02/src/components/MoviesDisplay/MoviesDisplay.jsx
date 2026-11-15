import MovieCard from "../MoviesDisplay/MovieCard";

function MoviesDisplay({ movies }) {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} title={movie.title} year={movie.year} />
        );
      })}
    </div>
  );
}
export default MoviesDisplay;
