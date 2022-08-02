import {
  StyledListItem,
  StyledPokemonLabel,
  StyledPokemonNumber,
  PokemonImage,
} from "./pokemonContainer.style";
import { TYPES } from "data/pokemonTypes";
import { Pokemon } from "types/Pokemon";
import { useNavigate } from "react-router-dom";

interface PokemonContainerProps {
  pokemon: Pokemon;
}

export default function PokemonContainer({ pokemon }: PokemonContainerProps) {
  const { type } = pokemon.types[0];
  const { other } = pokemon.sprites;
  const navigate = useNavigate();

  const redirectToPokemon = function (pokemon: Pokemon) {
    navigate(`/pokemon/${pokemon.name}`, { state: { pokemon } });
  };

  return (
    <StyledListItem
      color={TYPES[type.name].color}
      onClick={() => redirectToPokemon(pokemon)}
    >
      <div>
        <StyledPokemonNumber color={TYPES[type.name].color}>
          {"#" + ("" + pokemon.id).padStart(3, "0")}
        </StyledPokemonNumber>
        <PokemonImage url={other["official-artwork"].front_default} />
      </div>
      <StyledPokemonLabel color={TYPES[type.name].color}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </StyledPokemonLabel>
    </StyledListItem>
  );
}
