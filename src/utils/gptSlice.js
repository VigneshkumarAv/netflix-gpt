import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch =
        action?.payload === false ? action.payload : !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      //const { movieNames, movieResults } = action.payload;
      state.gptMovies = action.payload;
    },
  },
});
export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
