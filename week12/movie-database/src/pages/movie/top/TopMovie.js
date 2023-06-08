import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import Movies from "../../../components/Movies/Movies";
import ENDPOINTS from "../../../utils/constants/enpoints";

const TopRatedMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOP);
    setMovies(response.data.results);
  }

  console.log(movies);

  return (
    <>
      {/* <h2>TopRated Movie</h2> */}
      <Hero />
      <Movies movies={movies} title="Top Rated Movies"/>
    </>
  );
};

export default TopRatedMovie;
