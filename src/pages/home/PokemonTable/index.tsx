import { StyledList } from "./pokemonTable.style";
import { Pokemon } from "../../../types/Pokemon";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonContainer from "../PokemonContainer";

type Props = {
  searchPokemon: string;
};

export default function PokemonTable({ searchPokemon }: Props) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  console.log("Renderizou");

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1154`).then((response) =>
      response.data.results.map((pokemon: any) =>
        axios.get(pokemon.url).then((response) => {
          setPokemonList((oldList) => [...oldList, response.data]);
        })
      )
    );
  }, []);

  return (
    <section>
      <StyledList>
        {pokemonList
          .sort(
            (firstPokemon, secondPokemon) => firstPokemon.id - secondPokemon.id
          )
          .map((pokemon) => (
            <PokemonContainer
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              sprites={pokemon.sprites}
              types={pokemon.types}
            />
          ))}
      </StyledList>
    </section>
  );
}
