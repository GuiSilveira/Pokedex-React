import Header from "./Header/Header";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import PokemonInfo from "./PokemonInfo/PokemonInfo";
import {
  StyledPokemonDiv,
  StyledButtonDiv,
  StyledButton,
} from "./pokemon.style";
import { useLocation } from "react-router-dom";
import { Pokemon as PokemonType } from "types/Pokemon";
import { TYPES } from "data/pokemonTypes";
import About from "./PokemonInfo/About/About";
import BaseStats from "./PokemonInfo/BaseStats";

export default function Pokemon() {
  const location = useLocation();
  const pokemonData = location.state["pokemon"] as PokemonType;
  const pokemonType = pokemonData.types[0].type.name;

  console.log(pokemonData);

  return (
    <StyledPokemonDiv color={TYPES[pokemonType].color}>
      <Header id={pokemonData.id} name={pokemonData.name} />
      <StyledButtonDiv>
        <StyledButton>
          <BiChevronLeft />
        </StyledButton>
        <StyledButton>
          <BiChevronRight />
        </StyledButton>
      </StyledButtonDiv>
      <PokemonInfo
        About={
          <About
            sprite={""}
            type={pokemonType}
            height={pokemonData.height}
            weight={pokemonData.weight}
          />
        }
        BaseStats={<BaseStats type={pokemonType} stats={pokemonData.stats} />}
      />
    </StyledPokemonDiv>
  );
}
