import Header from "./Header/Header";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import PokemonInfo from "./PokemonInfo/PokemonInfo";
import {
  StyledPokemonDiv,
  StyledButtonDiv,
  StyledButton,
} from "./pokemon.style";
import { useLocation, useNavigate } from "react-router-dom";
import { TYPES } from "data/pokemonTypes";
import About from "./PokemonInfo/About/About";
import BaseStats from "./PokemonInfo/BaseStats";
import { usePokemonCount } from "hooks/usePokemonCount";
import { Pokemon as TPokemon } from "types/Pokemon";
import { redirectToPokemon } from "utils/redirectToPokemon";
import { usePokemon } from "hooks";

export default function Pokemon() {
  const location = useLocation();
  const navigate = useNavigate();
  const pokemonCount = usePokemonCount();
  const pokemonData = location.state["pokemon"] as TPokemon;
  const pokemonFirstType = pokemonData.types[0].type.name;
  const pokemonColor = TYPES[pokemonFirstType].color;
  const pokemonTypes = pokemonData.types;
  const pokemonSprites = pokemonData.sprites;
  const pokemonMoves = pokemonData.moves;
  const pokemonId = pokemonData.id;
  const url = pokemonData.species["url"];

  const previousPokemon = usePokemon(`pokemon/${pokemonId - 1}`, pokemonCount);
  const nextPokemon = usePokemon(`pokemon/${pokemonId + 1}`, pokemonCount);

  const onNext = () => {
    redirectToPokemon(nextPokemon.pokemon, navigate);
  };

  const onPrevious = () => {
    redirectToPokemon(previousPokemon.pokemon, navigate);
  };

  return (
    <StyledPokemonDiv color={pokemonColor}>
      <Header id={pokemonId} name={pokemonData.name} />
      <StyledButtonDiv>
        {pokemonId > 1 ? (
          <StyledButton onClick={onPrevious}>
            <BiChevronLeft />
          </StyledButton>
        ) : (
          <div></div>
        )}
        {pokemonId <= pokemonCount ? (
          <StyledButton onClick={onNext}>
            <BiChevronRight />
          </StyledButton>
        ) : (
          <div></div>
        )}
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
            moves={pokemonMoves}
          />
        }
        BaseStats={
          <BaseStats type={pokemonFirstType} stats={pokemonData.stats} />
        }
      />
    </StyledPokemonDiv>
  );
}
