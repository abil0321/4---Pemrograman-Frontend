import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import Heading from "../ui/Typography/Heading";
import Paragraph from "../ui/Typography/Paragraph";
import Image from "../ui/Media/Image";
import StyledHero from "./HeroStyledComponent";

function Hero() {
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  // useEffect(fetchMovie, []);

  console.log(movie);
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          {/* <h2>{movie.Title}</h2> */}
          <Heading>{movie.Title}</Heading>

          <h3>{movie.Genre}</h3>
          {/* <p>{movie.Plot}</p> */}

          <Paragraph>{movie.Plot}</Paragraph>
          <Button variant="secondary" size="lg">Watch</Button>
          
        </div>
        <div className="hero__right">
          {/* <img
            src={movie.Poster}
            alt={movie.Title}
          /> */}
          <Image
          src={movie.Poster}
          alt={movie.Title}/>

        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
