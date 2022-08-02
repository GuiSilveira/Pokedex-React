import {
  StyledListItem,
  StyledPokemonLabel,
  StyledPokemonNumber,
  PokemonImage,
} from "./pokemonContainer.style";
import PokemonShadow from "assets/svg/pokemonShadow.svg";
import { TYPES } from "data/pokemonTypes";
import { Pokemon } from "types/Pokemon";

export default function PokemonContainer({
  id,
  name,
  sprites,
  types,
}: Pokemon) {
  const { type } = types[0];
  const { other } = sprites;

  return (
    <StyledListItem color={TYPES[type.name].color}>
      <div>
        <StyledPokemonNumber color={TYPES[type.name].color}>
          {"#" + ("" + id).padStart(3, "0")}
        </StyledPokemonNumber>
        <PokemonImage url={other["official-artwork"].front_default} />
      </div>
      <StyledPokemonLabel color={TYPES[type.name].color}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </StyledPokemonLabel>
    </StyledListItem>
  );
}
