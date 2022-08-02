import { StyledList } from "./pokemonTable.style";
import { Pokemon } from "../../../types/Pokemon";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonContainer from "../PokemonContainer";

type PokemonTableProps = {
  searchedPokemon: string;
};

export default function PokemonTable({ searchedPokemon }: PokemonTableProps) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  console.log("Renderizou");

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1154`).then((response) =>
      response.data.results.map((pokemon: any) =>
        axios.get(pokemon.url).then((response) => {
          const { sprites } = response.data;
          const { other } = sprites;

          if (!other["official-artwork"].front_default) {
            return;
          }

          setPokemonList((oldList) => [...oldList, response.data]);
        })
      )
    );
  }, []);

  const filteredPokemonList =
    searchedPokemon.length > 0
      ? pokemonList.filter((pokemon) => pokemon.name.includes(searchedPokemon))
      : [];

  return (
    <section>
      <StyledList>
        {searchedPokemon.length > 0
          ? filteredPokemonList
              .sort(
                (firstPokemon, secondPokemon) =>
                  firstPokemon.id - secondPokemon.id
              )
              .map((pokemon) => (
                <PokemonContainer
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  sprites={pokemon.sprites}
                  types={pokemon.types}
                />
              ))
          : pokemonList
              .sort(
                (firstPokemon, secondPokemon) =>
                  firstPokemon.id - secondPokemon.id
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
