import { ImageList, ImageListItemBar, IconButton } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { removeLikedMovie } from "../../store/movieList";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import { MovieType } from "../../types/movie";
import { BASE_URL } from "../../services/Movies";
import { StyledTypography, ImageItem } from "./styled";
import { StyledMovieListContainer } from "../../components/MovieList/styled";
import { StyledBox } from "../homePage/styled";

const LikedMovies = () => {
  const dispatch = useDispatch();

  const likedMovies = useSelector(
    (state: RootState) => state.movies.likedMovies
  );

  return (
    <>
      <StyledTypography variant="h4">LIKED MOVIES</StyledTypography>
      {likedMovies.length === 0 ? (
        <StyledMovieListContainer>
          <StyledTypography variant="h5">No movies to show</StyledTypography>
        </StyledMovieListContainer>
      ) : (
        <StyledBox>
          <ImageList
            style={{ width: "100%", height: "100%" }}
            cols={3}
            rowHeight={600}
            gap={20}
          >
            {likedMovies.map((movie: MovieType) => (
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
                    >
                      <FavoriteSharpIcon
                        onClick={() => dispatch(removeLikedMovie(movie))}
                        style={{ color: "red" }}
                      />
                    </IconButton>
                  }
                />
              </ImageItem>
            ))}
          </ImageList>
        </StyledBox>
      )}
    </>
  );
};

export default LikedMovies;
