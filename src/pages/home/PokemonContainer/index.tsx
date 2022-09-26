import {
  StyledListItem,
  StyledPokemonLabel,
  StyledPokemonNumber,
  PokemonImage,
} from "./pokemonContainer.style";
import { TYPES } from "data/pokemonTypes";
import { Pokemon } from "types/Pokemon";
import { useNavigate } from "react-router-dom";
import { firstLetterToUppercase } from "utils/firstLetterToUppercase";
import { formatPokemonNumber } from "utils/formatPokemonNumber";
import { usePokemon } from "hooks";

interface PokemonContainerProps {
  url: string;
}

interface IPokemonTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

const getPokemonTypesInfo = (
  typesPokemon: IPokemonTypes[],
  field: string = "name"
): string => {
  switch (field) {
    case "name":
      return typesPokemon[0].type.name;

    case "url":
      return typesPokemon[0].type.url;

    default:
      return "";
  }
};

const getPokemonArtwork = (sprites) => {
  return sprites.other["official-artwork"].front_default || "";
};

export default function PokemonContainer({ url }: PokemonContainerProps) {
  const { pokemon, isLoading } = usePokemon(url);

  const navigate = useNavigate();

  const redirectToPokemon = function (pokemon: Pokemon) {
    navigate(`/pokemon/${pokemon.name}`, { state: { pokemon } });
  };

  if (isLoading) {
    return <div className="container">carregando ...</div>;
  }

  if (!pokemon) {
    return <div className="container">Pokemon com erro muleque ...</div>;
  }

  return (
    <StyledListItem
      color={TYPES[getPokemonTypesInfo(pokemon.types)].color}
      onClick={() => redirectToPokemon(pokemon)}
    >
      <div>
        <StyledPokemonNumber
          color={TYPES[getPokemonTypesInfo(pokemon.types)].color}
        >
          {formatPokemonNumber(pokemon.id)}
        </StyledPokemonNumber>
        <PokemonImage url={getPokemonArtwork(pokemon.sprites)} />
      </div>
      <StyledPokemonLabel
        color={TYPES[getPokemonTypesInfo(pokemon.types)].color}
      >
        {firstLetterToUppercase(pokemon.name)}
      </StyledPokemonLabel>
    </StyledListItem>
  );
}
