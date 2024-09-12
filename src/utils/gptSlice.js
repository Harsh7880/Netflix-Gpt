import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearchView: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGPTSeachView: (state) => {
      state.showGPTSearchView = !state.showGPTSearchView;
    },
    gptMovieresult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGPTSeachView, gptMovieresult } = gptSlice.actions;
export default gptSlice.reducer;
