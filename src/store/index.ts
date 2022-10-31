import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./movieList";

export const store = configureStore({
  reducer: {
    movies: movieListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
