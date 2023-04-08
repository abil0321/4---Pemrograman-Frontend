import AddMovie from "../components/Add_Movie/AddMovie";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import data from "../utils/constants/data";


const Main = () => {

  const [movies, setMovies] = useState(data);

  return (
    <main>
      <Hero />
      <Movies movies={movies} setMovies={setMovies}/>
      <AddMovie movies={movies} setMovies={setMovies}/>
    </main>
  )
}

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
      
    </>
  );
}

export default Home;