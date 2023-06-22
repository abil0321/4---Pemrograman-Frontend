import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import Movies from "../../../components/Movies/Movies";
import ENDPOINTS from "../../../utils/constants/enpoints";
import { useDispatch } from "react-redux";
import { updateMOvies } from "../../../features/movieSlice";

const NowPlayingMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOW);
    dispatch(updateMOvies(response.data.results));
  }


  return (
    <>
      {/* <h2>NowPlaying Movie</h2> */}
      <Hero />
      <Movies title="Now Playing Movies"/>
    </>
  );
};

export default NowPlayingMovie;
