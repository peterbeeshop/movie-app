import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background: #041921;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const StyledTypography = styled(Typography)`
  color: white;
`;

export const StyledLink = styled(Link)`
  color: orange;
  text-decoration: none;
`;
