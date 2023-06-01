import StyledMovie from "./MovieStyledComponent";

// Component Movie menerima props
function Movie(props) {
  // Melakukan destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <div className="movie">
        <img src={movie.poster} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>

        <p>Category: {movie.type}</p>
      </div>
    </StyledMovie>
  );
}

export default Movie;
