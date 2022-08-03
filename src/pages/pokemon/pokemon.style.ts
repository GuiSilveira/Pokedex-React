import styled from "styled-components";
import PokeballIcon from "assets/svg/Pokeball-BG.svg";

export const StyledPokemonDiv = styled.div`
  background: coral url(${PokeballIcon}) no-repeat;
  background-position-x: calc(100% - 8px);
  background-position-y: 8px;
  background-size: 60%;
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 13.6rem 2.8rem 0;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  color: #fff;
  background: none;
  border: none;
  font-size: 2.8rem;
  cursor: pointer;
`;
