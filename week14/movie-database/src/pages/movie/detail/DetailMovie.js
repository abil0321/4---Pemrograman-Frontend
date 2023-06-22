import { useEffect, useState } from "react";
import Detail from "../../../components/Detail/Detail";
import Movies from "../../../components/Movies/Movies";
import { useParams } from "react-router-dom";
import axios from "axios";
import ENDPOINTS from "../../../utils/constants/enpoints";
import { useDispatch } from "react-redux";
import { updateMOvies } from "../../../features/movieSlice";

function DetailMovie() {
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const {id} = useParams();

    // const API_KEY = process.env.REACT_APP_API_KEY;

    async function getRecommendationMovies(){
        // const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;

        const response = await axios(ENDPOINTS.RECOM(id));
        
        dispatch(updateMOvies(response.data.results));
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