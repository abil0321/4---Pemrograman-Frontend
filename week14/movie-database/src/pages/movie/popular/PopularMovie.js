import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../../components/Movies/Movies";
import Hero from "../../../components/Hero/Hero";
import ENDPOINTS from "../../../utils/constants/enpoints";
import { updateMOvies } from "../../../features/movieSlice";
import { useDispatch } from "react-redux";

const PopularMovie = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    dispatch(updateMOvies(response.data.results));
  }


  return (
    <>
      {/* <h2>Popular Movie</h2> */}
      <Hero />
      <Movies title="Popular Movies"/>
    </>
  );
};

export default PopularMovie;
