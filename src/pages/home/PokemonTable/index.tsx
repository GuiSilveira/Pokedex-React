import { StyledList } from "./pokemonTable.style";
import { useEffect, useState } from "react";
import PokemonContainer from "../PokemonContainer";
import { getPokemonList, LIMIT_ITEMS_POKEMON } from "services";

interface IPokemonList {
  name: string;
  url: string;
}

export default function PokemonTable() {
  const [pokemonList, setPokemonList] = useState<IPokemonList[]>([]);
  const [nextUrl, setNextUrl] = useState("");

  const initializePage = async () => {
    const data = await getPokemonList();
    setNextUrl(data.next);
    setPokemonList(data.results);
  };

  const loadMore = async () => {
    const url = nextUrl
      .replace("https://pokeapi.co/api/v2/", "")
      .replace(`limit=${LIMIT_ITEMS_POKEMON}`, "");
    const data = await getPokemonList(url);
    setNextUrl(data.next);
    setPokemonList([...pokemonList, ...data.results]);
  };

  useEffect(() => {
    initializePage();
  }, []);

  return (
    <section>
      <StyledList>
        {pokemonList.map((item) => (
          <PokemonContainer key={item.name} url={item.url} />
        ))}

        <button onClick={() => loadMore()}>Carregar Mais</button>
      </StyledList>
    </section>
  );
}
