import PokemonContainer from "../PokemonContainer";
import { StyledList } from "./pokemonTable.style";

export default function PokemonTable() {
  return (
    <section>
      <StyledList>
        <PokemonContainer />
        <PokemonContainer />
        <PokemonContainer />
        <PokemonContainer />
      </StyledList>
    </section>
  );
}
