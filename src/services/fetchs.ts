import { api } from "services";

export const LIMIT_ITEMS_POKEMON = 12;

export const getPokemonList = (url: string = "pokemon") =>
  api
    .get(url, {
      params: {
        limit: LIMIT_ITEMS_POKEMON,
      },
    })
    .then((response) => response.data);
