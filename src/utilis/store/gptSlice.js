import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showgptSearch: false,
    movieNames: null,
    movieTMBDResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showgptSearch = !state.showgptSearch;
    },
    addGptMovieResult:(state,action) =>{
      const {movieNames, movieTMBDResults} = action.payload;
      state.movieNames = movieNames;
      state.movieTMBDResults = movieTMBDResults;
    }
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
