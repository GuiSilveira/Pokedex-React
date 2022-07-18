import { useParams } from "react-router-dom";
import { StyledPokemonDiv } from "./pokemon.style";

export default function Pokemon() {
  let { id } = useParams();
  return <StyledPokemonDiv>This is the {id} Page!</StyledPokemonDiv>;
}
