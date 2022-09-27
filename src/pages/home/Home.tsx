import Logo from "./Logo";
import PokemonTable from "./PokemonTable";
import { StyledDiv, StyledMain } from "./home.style";

export default function Home() {
  return (
    <StyledMain>
      <StyledDiv>
        <Logo />
      </StyledDiv>
      <PokemonTable />
    </StyledMain>
  );
}
