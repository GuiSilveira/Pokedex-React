import {
  StyledListItem,
  StyledPokemonLabel,
  StyledPokemonNumber,
} from "./pokemonContainer.style";

import { ReactComponent as PokemonPreview } from "assets/svg/pokemonShadow.svg";
import { TYPES } from "data/pokemonTypes";

type Props = {
  pokemonNumber: string;
  pokemonName: string;
  pokemonType: string;
};

export default function PokemonContainer({
  pokemonNumber,
  pokemonName,
  pokemonType,
}: Props) {
  return (
    <StyledListItem color={TYPES[pokemonType as keyof typeof TYPES].color}>
      <div>
        <StyledPokemonNumber
          color={TYPES[pokemonType as keyof typeof TYPES].color}
        >
          {"#" + pokemonNumber.padStart(3, "0")}
        </StyledPokemonNumber>
        <PokemonPreview />
      </div>
      <StyledPokemonLabel
        color={TYPES[pokemonType as keyof typeof TYPES].color}
      >
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </StyledPokemonLabel>
    </StyledListItem>
  );
}
