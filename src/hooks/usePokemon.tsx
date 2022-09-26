import { useEffect, useState } from "react";
import { api } from "services";
import { Pokemon as TPokemon } from "types/Pokemon";

export const usePokemon = (url: string) => {
  const [isLoading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<TPokemon | undefined>();

  const getPokemon = () => {
    setLoading(true);
    api.get(url).then((response) => {
      setLoading(false);

      const { sprites } = response.data;
      const { other } = sprites;

      if (!other["official-artwork"].front_default) {
        return;
      }

      setPokemon(response.data);
    });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
