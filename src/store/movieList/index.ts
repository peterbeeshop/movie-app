import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieType } from "../../types/movie";

interface MovieListState {
  movieList: MovieType[];
  likedMovies: MovieType[];
}

const initialState: MovieListState = {
  movieList: [],
  likedMovies: [],
};

export const counterSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovieList: (state, action: PayloadAction<MovieType[]>) => {
      state.movieList = action.payload;
    },
    setLikedMovies: (state, action: PayloadAction<MovieType>) => {
      state.likedMovies = [...state.likedMovies, action.payload];
    },
    removeLikedMovie: (state, action: PayloadAction<MovieType>) => {
      state.likedMovies = state.likedMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { setMovieList, setLikedMovies, removeLikedMovie } =
  counterSlice.actions;
export default counterSlice.reducer;
