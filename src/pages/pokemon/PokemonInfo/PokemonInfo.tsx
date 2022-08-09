import { StyledMain } from "./pokemonInfo.style";

type PokemonInfoProps = {
  About: JSX.Element;
  BaseStats: JSX.Element;
};

export default function PokemonInfo({ About, BaseStats }: PokemonInfoProps) {
  return (
    <StyledMain>
      {About}
      {BaseStats}
    </StyledMain>
  );
}
