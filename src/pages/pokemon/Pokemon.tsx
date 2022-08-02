import { useParams } from "react-router-dom";
import Header from "./Header";
import { StyledPokemonDiv } from "./pokemon.style";

export default function Pokemon() {
  let { id } = useParams();
  return <Header />;
}
