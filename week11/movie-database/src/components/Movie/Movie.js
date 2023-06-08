import StyledMovie from "./MovieStyledComponent";

// Component Movie menerima props
function Movie(props) {
  // Melakukan destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <div className="movie">
        <img src={movie.poster || `https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title || movie.original_title}</h3>
        <p>{movie.year || movie.release_date}</p>

        {/* <p>Category: {movie.type}</p> */}
      </div>
    </StyledMovie>
  );
}

export default Movie;
