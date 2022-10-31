import axios from "axios";

export const API_KEY = process.env.REACT_APP_API_KEY;

export const apiClient = axios.create({
  baseURL: ` https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
});
