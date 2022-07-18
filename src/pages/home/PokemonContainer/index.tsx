import {
  StyledListItem,
  StyledPokemonLabel,
  StyledPokemonNumber,
} from "./pokemonContainer.style";

import { ReactComponent as PokemonPreview } from "../../../assets/svg/pokemonShadow.svg";

export default function PokemonContainer() {
  return (
    <StyledListItem>
      <div>
        <StyledPokemonNumber>#123</StyledPokemonNumber>
        <PokemonPreview />
      </div>
      <StyledPokemonLabel>Pokemon Name</StyledPokemonLabel>
    </StyledListItem>
  );
}
