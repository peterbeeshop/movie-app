import { Typography, ImageListItem } from "@material-ui/core";
import styled from "styled-components";

export const StyledTypography = styled(Typography)`
  && {
    color: white;
    text-decoration: none;
    text-align: center;
    margin: 20px 0;
  }
`;

export const StyledImageListItem = styled(ImageListItem)`
  && {
    transition: 0.2s;
  }
  :hover {
    transform: scale(0.9);
    cursor: pointer;
  }
`;
