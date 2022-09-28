import { NavigateFunction } from "react-router-dom";
import { Pokemon as TPokemon } from "types/Pokemon";

export const redirectToPokemon = (
  pokemon: TPokemon,
  navigate: NavigateFunction
) => {
  navigate(`/pokemon/${pokemon.name}`, { state: { pokemon } });
};
