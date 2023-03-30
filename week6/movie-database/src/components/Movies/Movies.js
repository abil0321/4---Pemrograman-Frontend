import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import data from "../../utils/constants/data";
import {useState} from "react";
import {nanoid} from "nanoid";

function Movies() {

  // const movies = data;

  // buat state movies
  const [movies, setMovies] = useState(data);

  const tambahFilm = () => {
    const newFilm = {
      id: nanoid(),
      title: 'Jigsaw',
      year: 2022,
      type: 'movie',
      poster: "https://picsum.photos/300/400"
    }

    // movies.push(newFilm);

    // Update state movies
    setMovies([...movies, newFilm]);

    console.log(movies);
  }
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {
            movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />
            })
          }
        </div>

        <button onClick={tambahFilm}>Tambah Film</button>
      </section>
    </div>
  );
}

export default Movies;
