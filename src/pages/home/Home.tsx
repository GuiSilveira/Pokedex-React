import Logo from "./Logo";
import PokemonTable from "./PokemonTable";
import SearchBar from "./SearchBar";
import SortButton from "./SortButton";
import { StyledDiv, StyledMain } from "./home.style";
import { useState } from "react";

export default function Home() {
  const [searchedPokemon, setSearchedPokemon] = useState("");

  return (
    <StyledMain>
      <StyledDiv>
        <Logo />
        <SortButton />
      </StyledDiv>
      <SearchBar setSearchedData={setSearchedPokemon} />
      <PokemonTable searchedPokemon={searchedPokemon} />
    </StyledMain>
  );
}
