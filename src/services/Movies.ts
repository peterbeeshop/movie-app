import { MovieType } from "../types/movie";
import { apiClient } from "./config";

export const getPopularMovies = async (): Promise<MovieType[]> => {
  return (await apiClient.get("")).data.results;
};

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
