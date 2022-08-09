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
  const pokemonFirstType = pokemonData.types[0].type.name;
  const pokemonColor = TYPES[pokemonFirstType].color;
  const pokemonTypes = pokemonData.types;
  const pokemonSprites = pokemonData.sprites;
  const url = pokemonData.species["url"];

  return (
    <StyledPokemonDiv color={pokemonColor}>
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
            sprite={pokemonSprites.other["official-artwork"].front_default}
            types={pokemonTypes}
            pokemonColor={pokemonColor}
            height={pokemonData.height}
            weight={pokemonData.weight}
            urlDescription={url}
          />
        }
        BaseStats={
          <BaseStats type={pokemonFirstType} stats={pokemonData.stats} />
        }
      />
    </StyledPokemonDiv>
  );
}
