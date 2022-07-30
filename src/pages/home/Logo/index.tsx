import { StyledHeader, StyledDiv } from "./logo.style";
import { ReactComponent as PokeballIcon } from "assets/svg/Pokeball.svg";

export default function Logo() {
  return (
    <StyledDiv>
      <PokeballIcon />
      <StyledHeader>Pokedex</StyledHeader>
    </StyledDiv>
  );
}
