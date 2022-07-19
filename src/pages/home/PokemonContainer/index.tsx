import {
  StyledListItem,
  StyledPokemonLabel,
  StyledPokemonNumber,
} from "./pokemonContainer.style";

import { ReactComponent as PokemonPreview } from "../../../assets/svg/pokemonShadow.svg";

type Props = {
  pokemonNumber: number;
  pokemonName: string;
};

export default function PokemonContainer({
  pokemonNumber,
  pokemonName,
}: Props) {
  return (
    <StyledListItem>
      <div>
        <StyledPokemonNumber>{"#" + pokemonNumber}</StyledPokemonNumber>
        <PokemonPreview />
      </div>
      <StyledPokemonLabel>
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </StyledPokemonLabel>
    </StyledListItem>
  );
}
