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
  color: var(--white);
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
  gap: 24px;
  margin: var(--size-4) 0;
`;

export const StyledListItem = styled.li`
  text-align: center;

  &:nth-of-type(2) {
    border-left: 1px solid;
    border-right: 1px solid;
    border-color: var(--light-grey);
    padding: 0 2.4rem;
  }
`;

export const StyledListItemIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-1);
  margin-bottom: 1rem;
`;

export const StyledListItemMoveTextContainer = styled.div`
  text-align: left;
  margin-bottom: 1rem;
`;

export const StyledDarkParagraph = styled.p`
  color: var(--dark-grey);
`;

export const StyledLightParagraph = styled.p`
  color: var(--medium-grey);
  font-size: var(--size-1);
`;

export const StyledPokemonDescription = styled(StyledDarkParagraph)`
  margin: 0 2rem var(--size-4);
  text-align: justify;
  line-height: var(--size-4);
`;
