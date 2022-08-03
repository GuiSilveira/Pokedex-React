import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--size-4);
`;

export const StyledFigCaption = styled.figcaption`
  color: #fff;
  font-weight: 700;
  background-color: coral;
  padding: 4px var(--size-2);
  border-radius: 10px;
  margin-top: 5.6rem;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: -15rem;
  width: 20rem;
  height: 20rem;
`;

export const StyledList = styled.ul`
  display: flex;
  margin-top: var(--size-4);
`;
