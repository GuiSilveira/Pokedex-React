import Header from "./Header";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import PokemonInfo from "./PokemonInfo";
import {
  StyledPokemonDiv,
  StyledButtonDiv,
  StyledButton,
} from "./pokemon.style";

export default function Pokemon() {
  return (
    <StyledPokemonDiv>
      <Header />
      <StyledButtonDiv>
        <StyledButton>
          <BiChevronLeft />
        </StyledButton>
        <StyledButton>
          <BiChevronRight />
        </StyledButton>
      </StyledButtonDiv>
      <PokemonInfo />
    </StyledPokemonDiv>
  );
}
