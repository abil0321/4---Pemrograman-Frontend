import {createSlice} from "@reduxjs/toolkit"
import data from "../../utils/constants/data"

const movieSlice = createSlice({
    name: "Movie Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            state.movies.push(action.payload)
        },
        updateMOvies(state, action) {
            state.movies = action.payload;
        },
    },
});

const {addMovie, updateMOvies} = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export {addMovie, updateMOvies};
export default moviesReducer;