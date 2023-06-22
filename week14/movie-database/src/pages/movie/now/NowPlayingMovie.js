import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import Movies from "../../../components/Movies/Movies";
import ENDPOINTS from "../../../utils/constants/enpoints";

const NowPlayingMovie = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOW);
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
