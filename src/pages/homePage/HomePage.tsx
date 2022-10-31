import MovieList from "../../components/MovieList/MovieList";
import { StyledBox } from "./styled";

interface HomePageProps {
  loading: boolean;
  error: string;
}

const HomePage = ({ loading, error }: HomePageProps) => {
  return (
    <StyledBox>
      <MovieList loading={loading} error={error} />
    </StyledBox>
  );
};

export default HomePage;
