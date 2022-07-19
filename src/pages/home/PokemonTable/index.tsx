import PokemonContainer from "../PokemonContainer";
import { StyledList } from "./pokemonTable.style";
import { MOCK } from "../../../constants/mock";

type Props = {
  searchData: string;
};

export default function PokemonTable({ searchData }: Props) {
  return (
    <section>
      <StyledList>
        {MOCK.filter((value) => value.name === searchData.toLowerCase()).map(
          (value) => (
            <PokemonContainer
              key={value.id}
              pokemonNumber={"" + value.id}
              pokemonName={value.name}
              pokemonType={value.type.name}
            />
          )
        )}
      </StyledList>
    </section>
  );
}
