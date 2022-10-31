import { StyledWrapper, StyledTypography, StyledLink } from "./styled";

function Navbar() {
  return (
    <StyledWrapper>
      <StyledLink to="/">
        <StyledTypography variant="h5">Movie App</StyledTypography>
      </StyledLink>
      <StyledLink to="/liked">
        <StyledTypography variant="h5">Liked Movies</StyledTypography>
      </StyledLink>
    </StyledWrapper>
  );
}

export default Navbar;
