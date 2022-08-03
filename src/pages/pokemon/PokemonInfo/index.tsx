import About from "./About";
import BaseStats from "./BaseStats";
import { StyledMain } from "./pokemonInfo.style";

export default function PokemonInfo() {
  return (
    <StyledMain>
      <About />
      <BaseStats />
    </StyledMain>
  );
}
