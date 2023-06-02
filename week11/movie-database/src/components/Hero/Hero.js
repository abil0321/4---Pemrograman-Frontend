import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../ui/Button/Button";
import Heading from "../ui/Typography/Heading";
import Paragraph from "../ui/Typography/Paragraph";
import Image from "../ui/Media/Image";
import StyledHero from "./HeroStyledComponent";

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  // async function fetchMovie() {
  //   const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

  //   const response = await fetch(url);
  //   const data = await response.json();

  //   setMovie(data);
  // }

  useEffect(() => {
    getDetailMovie();
  }, []);

  // useEffect(getTrandingMovies, []);

  async function getTrandingMovies() {
    const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    // console.log(response.data.results[0]);
    return response.data.results[0];
  }

  async function getDetailMovie(){
    const trandingMovie = await getTrandingMovies();
    const id = trandingMovie.id;

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    console.log(response.data);
    setMovie(response.data)
  }
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          {/* <h2>{movie.Title}</h2> */}
          <Heading>{movie.title}</Heading>

          <h3>{genres}</h3>
          {/* <p>{movie.Plot}</p> */}

          <Paragraph>{movie.overview}</Paragraph>
          <Button as= "a" href= {trailer} variant="secondary" size="lg">Watch</Button>
          
        </div>
        <div className="hero__right">
          {/* <img
            src={movie.Poster}
            alt={movie.Title}
          /> */}
          <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.Title}/>

        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
