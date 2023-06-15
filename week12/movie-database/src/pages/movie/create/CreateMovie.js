import AddMovieForm from "../../../components/AddMovieForm/AddMovieForm";
import Hero from "../../../components/Hero/Hero";

const CreateMovie = ({movies, setMovies}) => {
    return(
     <>
        <Hero />
        <AddMovieForm movies={movies} setMovies={setMovies} />
     </>   
    )
}

export default CreateMovie;