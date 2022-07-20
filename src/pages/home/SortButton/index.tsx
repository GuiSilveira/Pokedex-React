import { StyledSortButton } from "./sortButton.style";
import { ReactComponent as SortByName } from "../../../assets/svg/Name.svg";

type Props = {
  pokemonTable: JSX.Element[];
  setPokemonTable: Function;
};

export default function SortButton({ pokemonTable, setPokemonTable }: Props) {
  function handleSort() {
    const sortedPokemon = [...pokemonTable].sort((a, b) =>
      a.props.pokemonName > b.props.pokemonName ? 1 : -1
    );
    setPokemonTable(sortedPokemon);
  }

  return (
    <StyledSortButton onClick={handleSort} name="SortButton">
      <SortByName />
    </StyledSortButton>
  );
}
