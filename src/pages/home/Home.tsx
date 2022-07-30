import Logo from "./Logo";
import PokemonTable from "./PokemonTable";
import SearchBar from "./SearchBar";
import SortButton from "./SortButton";
import { StyledDiv, StyledMain } from "./home.style";
import { useState } from "react";

export default function Home() {
  const [searchPokemon, setSearchPokemon] = useState<string>("");

  return (
    <StyledMain>
      <StyledDiv>
        <Logo />
        <SortButton />
      </StyledDiv>
      <SearchBar setSearchData={setSearchPokemon} />
      <PokemonTable searchPokemon={searchPokemon} />
    </StyledMain>
  );
}
