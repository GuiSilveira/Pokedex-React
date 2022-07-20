import PokemonContainer from "../PokemonContainer";
import { StyledList } from "./pokemonTable.style";
import { MOCK } from "../../../constants/mock";
import { useEffect } from "react";

type Props = {
  searchData: string;
  pokemonTable: JSX.Element[];
  setPokemonTable: Function;
};

export default function PokemonTable({
  searchData,
  pokemonTable,
  setPokemonTable,
}: Props) {
  useEffect(() => {
    setPokemonTable(
      MOCK.map((value) => (
        <PokemonContainer
          key={value.id}
          pokemonNumber={"" + value.id}
          pokemonName={value.name}
          pokemonType={value.type.name}
        />
      ))
    );
  }, []);

  return (
    <section>
      <StyledList>
        {searchData
          ? pokemonTable.filter(
              (value) => value.props.pokemonName === searchData.toLowerCase()
            )
          : pokemonTable}
      </StyledList>
    </section>
  );
}
