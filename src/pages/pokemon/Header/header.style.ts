import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--size-5);
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledH1 = styled.h1`
  font-size: var(--size-5);
  font-weight: 700;
`;

export const StyledP = styled.p`
  font-size: var(--size-2);
  font-weight: 700;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  font-size: var(--size-5);
  border: none;
  background: none;
  cursor: pointer;
`;
