import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import LikedMovies from "./pages/likedMovies/LikedMovies";
import { useDispatch } from "react-redux";
import { useFetch } from "./hooks/useFetch";
import { setMovieList } from "./store/movieList";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch();

  dispatch(setMovieList(data));
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage loading={loading} error={error} />}
        />
        <Route path="/liked" element={<LikedMovies />} />
      </Routes>
    </div>
  );
}

export default App;
