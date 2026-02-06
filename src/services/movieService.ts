import axios from "axios";
import type { Movie } from "../types/movie";
interface MoviesResponse {
  results: Movie[];
}
const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const { data } = await axios.get<MoviesResponse>(BASE_URL, {
    params: { query },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return data.results;
};
