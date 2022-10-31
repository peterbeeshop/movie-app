import { Box, ImageListItem } from "@material-ui/core";
import styled from "styled-components";

export const StyledMovieListContainer = styled(Box)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export const StyledImageListItem = styled(ImageListItem)`
  && {
    transition: 0.2s;
  }
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
