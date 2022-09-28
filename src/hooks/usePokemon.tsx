import { useCallback, useEffect, useState } from "react";
import { api } from "services";
import { Pokemon as TPokemon } from "types/Pokemon";

export const usePokemon = (url: string, count?: number) => {
  const [isLoading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<TPokemon | undefined>();

  const getPokemon = useCallback(() => {
    setLoading(true);

    api
      .get(url)
      .then((response) => {
        setLoading(false);

        const { sprites } = response.data;
        const { other } = sprites;

        if (!other["official-artwork"].front_default) {
          return;
        }

        setPokemon(response.data);
      })
      .catch(() => console.log("Pokemon não encontrado!"));
  }, [url]);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  return {
    isLoading,
    pokemon,
  };
};
