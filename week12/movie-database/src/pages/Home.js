// Import Navbar, Hero, Movies, Footer Component
// import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
// import Footer from "../components/Footer/Footer";
// import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
// import { useState } from "react";
// import data from "../utils/constants/data";
// import Counter from "../components/Counter";

function Main() {
  // const [movies, setMovies] = useState(data);

  return (
    <main>
      <Hero />
      {/* Mengirim props: state movies */}
      <Movies title="Latest Movies" />
      {/* <AddMovieForm movies={movies} setMovies={setMovies} /> */}
    </main>

    // <Counter />
  );
}

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Main />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
