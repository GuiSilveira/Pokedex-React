import { useState, useEffect } from "react";
import { api } from "services";

export const usePokemonCount = () => {
  const [pokemonCount, setPokemonCount] = useState<number>();

  useEffect(() => {
    api
      .get("pokemon")
      .then((response) => response.data)
      .then((data) => setPokemonCount(data.count));
  }, []);

  return pokemonCount;
};
