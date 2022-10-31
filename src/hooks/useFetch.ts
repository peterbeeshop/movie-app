import { useEffect, useState } from "react";
import { MovieType } from "../types/movie";
import { getPopularMovies } from "../services/Movies";

export const useFetch = () => {
  const [data, setData] = useState<MovieType[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await getPopularMovies();

        setData(response);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError("An error occured while fetching the data");
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  return { loading, error, data };
};
