import { StyledList } from "./pokemonTable.style";
import { Pokemon } from "../../../types/Pokemon";
import { useState } from "react";

type Props = {
  searchPokemon: string;
};

export default function PokemonTable({ searchPokemon }: Props) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  return (
    <section>
      <StyledList>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </StyledList>
    </section>
  );
}
