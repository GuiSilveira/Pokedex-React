import Logo from "./Logo";
import PokemonTable from "./PokemonTable";
import SearchBar from "./SearchBar";
import SortButton from "./SortButton";
import { StyledDiv, StyledMain } from "./home.style";
import { useState } from "react";

export default function Home() {
  const [searchData, setSearchData] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <StyledMain>
      <StyledDiv>
        <Logo />
        <SortButton
          pokemonTable={pokemonList}
          setPokemonTable={setPokemonList}
        />
      </StyledDiv>
      <SearchBar setSearchData={setSearchData} />
      <PokemonTable
        searchData={searchData}
        pokemonTable={pokemonList}
        setPokemonTable={setPokemonList}
      />
    </StyledMain>
  );
}
