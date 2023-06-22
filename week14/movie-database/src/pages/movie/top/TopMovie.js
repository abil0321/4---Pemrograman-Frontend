import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import Movies from "../../../components/Movies/Movies";
import ENDPOINTS from "../../../utils/constants/enpoints";
import { useDispatch } from "react-redux";
import { updateMOvies } from "../../../features/movieSlice";

const TopRatedMovie = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOP);
    dispatch(updateMOvies(response.data.results));
  }


  return (
    <>
      {/* <h2>TopRated Movie</h2> */}
      <Hero />
      <Movies title="Top Rated Movies"/>
    </>
  );
};

export default TopRatedMovie;
