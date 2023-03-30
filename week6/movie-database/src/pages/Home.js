import AddMovie from "../components/Add_Movie/AddMovie";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Movies />
      <AddMovie />
      <Footer />
      
    </>
  );
}

export default Home;