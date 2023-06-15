import { useEffect, useState } from "react";
import Detail from "../../../components/Detail/Detail";
import Movies from "../../../components/Movies/Movies";
import { useParams } from "react-router-dom";
import axios from "axios";
import ENDPOINTS from "../../../utils/constants/enpoints";

function DetailMovie() {
    const [movies, setMovies] = useState([]);
    const {id} = useParams();

    // const API_KEY = process.env.REACT_APP_API_KEY;

    async function getRecommendationMovies(){
        // const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;

        const response = await axios(ENDPOINTS.RECOM(id));
        
        setMovies(response.data.results);
    }
    
    useEffect(() => {
        getRecommendationMovies();
    }, [])

    return(
        <>
            <Detail />
            <Movies movies={movies} />
        </>
    )
}

export default DetailMovie;

// const endpoint = {
//     popular: ``,
//     detail: (id) => {
//         return ''
//     }
// }