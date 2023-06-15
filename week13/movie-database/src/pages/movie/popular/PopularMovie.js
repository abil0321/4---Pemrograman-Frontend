import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../../components/Movies/Movies";
import Hero from "../../../components/Hero/Hero";
import ENDPOINTS from "../../../utils/constants/enpoints";

const PopularMovie = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    setMovies(response.data.results);
  }

  console.log(movies);

  return (
    <>
      {/* <h2>Popular Movie</h2> */}
      <Hero />
      <Movies movies={movies} title="Popular Movies"/>
    </>
  );
};

export default PopularMovie;
