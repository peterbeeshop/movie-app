import { useSelector, useDispatch } from "react-redux";
import { setLikedMovies, removeLikedMovie } from "../../store/movieList";
import { RootState } from "../../store";
import {
  CircularProgress,
  IconButton,
  ImageList,
  ImageListItemBar,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import { BASE_URL } from "../../services/Movies";
import { StyledTypography } from "../../pages/likedMovies/styled";
import { ImageItem, StyledMovieListContainer } from "./styled";
import { MovieType } from "../../types/movie";

interface MovieListProps {
  loading: boolean;
  error: string;
}

const MovieList = ({ loading, error }: MovieListProps) => {
  const dispatch = useDispatch();

  const listOfMovies = useSelector(
    (state: RootState) => state.movies.movieList
  );

  const likedMovies = useSelector(
    (state: RootState) => state.movies.likedMovies
  );

  const handleClick = (movie: MovieType) => {
    if (likedMovies.includes(movie)) {
      dispatch(removeLikedMovie(movie));
    } else {
      dispatch(setLikedMovies(movie));
    }
  };

  if (loading) {
    return (
      <StyledMovieListContainer>
        <CircularProgress color="primary" />
      </StyledMovieListContainer>
    );
  } else if (error) {
    return <StyledMovieListContainer>{error}</StyledMovieListContainer>;
  } else {
    return (
      <>
        <StyledTypography variant="h4">POPULAR MOVIES</StyledTypography>
        <ImageList
          style={{ width: "100%", height: "100%" }}
          cols={3}
          rowHeight={600}
          gap={45}
        >
          {listOfMovies.map((movie) => (
            <ImageItem key={movie.id}>
              <img
                src={`${BASE_URL}${movie.poster_path}?w=248&fit=crop&auto=format`}
                alt={movie.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={movie.title}
                subtitle={movie.overview}
                actionIcon={
                  <IconButton
                    style={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${movie.title}`}
                    onClick={() => handleClick(movie)}
                  >
                    {likedMovies.includes(movie) ? (
                      <FavoriteSharpIcon style={{ color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon style={{ color: "red" }} />
                    )}
                  </IconButton>
                }
              />
            </ImageItem>
          ))}
        </ImageList>
      </>
    );
  }
};

export default MovieList;
