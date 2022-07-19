import Logo from "./Logo";
import PokemonTable from "./PokemonTable";
import SearchBar from "./SearchBar";
import SortButton from "./SortButton";
import { StyledDiv, StyledMain } from "./home.style";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [searchData, setSearchData] = useState("");

  return (
    <StyledMain>
      <StyledDiv>
        <Logo />
        <SortButton />
      </StyledDiv>
      <SearchBar setSearchData={setSearchData} />
      <PokemonTable searchData={searchData} />
    </StyledMain>
  );
}
