import Logo from "./Logo";
import PokemonTable from "./PokemonTable";
import SearchBar from "./SearchBar";
import SortButton from "./SortButton";
import { StyledDiv, StyledMain } from "./home.style";

export default function Home() {
  return (
    <StyledMain>
      <StyledDiv>
        <Logo />
        <SortButton />
      </StyledDiv>
      <SearchBar />
      <PokemonTable />
    </StyledMain>
  );
}
