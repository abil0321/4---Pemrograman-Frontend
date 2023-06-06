import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import Movies from "../../../components/Movies/Movies";

const NowPlayingMovie = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(URL);
    setMovies(response.data.results);
  }

  console.log(movies);

  return (
    <>
      {/* <h2>NowPlaying Movie</h2> */}
      <Hero />
      <Movies movies={movies} title="Now Playing Movies"/>
    </>
  );
};

export default NowPlayingMovie;
