import styled from "styled-components";

export const StyledListItem = styled.li`
  background-color: #fff;
  border: 1px solid ${(props) => props.color};
  border-radius: 8px;
  text-align: center;
  overflow: hidden;
`;

StyledListItem.defaultProps = {
  color: "#e0e0e0",
};

export const StyledPokemonNumber = styled.p`
  color: ${(props) => props.color};
  font-size: var(--size-1);
  padding: var(--size-1);
  padding-bottom: 0;
  text-align: right;
`;

StyledPokemonNumber.defaultProps = {
  color: "#b8b8b8",
};

export const StyledPokemonLabel = styled.p`
  color: #fff;
  background-color: ${(props) => props.color};
  padding: var(--size-1);
`;

StyledPokemonLabel.defaultProps = {
  color: "#b8b8b8",
};
