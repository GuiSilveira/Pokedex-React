import { StyledH2 } from "styles/sectionTitle.style";
import {
  StyledSection,
  StyledFigure,
  StyledFigCaption,
  StyledImg,
  StyledList,
  StyledListItem,
  StyledListItemIconContainer,
  StyledListItemMoveTextContainer,
  StyledDarkParagraph,
  StyledLightParagraph,
  StyledPokemonDescription,
  StyledFigCaptionDiv,
} from "./about.style";

import { firstLetterToUppercase } from "utils/firstLetterToUppercase";
import { ReactComponent as RulerIcon } from "assets/svg/Ruler.svg";
import { ReactComponent as ScaleIcon } from "assets/svg/Scale.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { TYPES } from "data/pokemonTypes";
import { usePokemonDescription } from "hooks/usePokemonDescription";

type AboutProps = {
  sprite: string;
  types: object;
  pokemonColor: string;
  height: number;
  weight: number;
  urlDescription: string;
};

export default function About({
  sprite,
  types,
  pokemonColor,
  height,
  weight,
  urlDescription,
}: AboutProps) {
  const description = usePokemonDescription(urlDescription);
  const pokemonTypes = types as [];
  console.log(pokemonTypes);

  return (
    <StyledSection>
      <StyledFigure>
        <StyledImg src={sprite} alt="Pokemon Image" />
        <StyledFigCaptionDiv>
          {pokemonTypes.map((type) => {
            const typeName = type["type"]["name"];
            const typeColor = TYPES[typeName]["color"];

            return (
              <StyledFigCaption key={typeName} color={typeColor}>
                {firstLetterToUppercase(typeName)}
              </StyledFigCaption>
            );
          })}
        </StyledFigCaptionDiv>
      </StyledFigure>
      <StyledH2 color={pokemonColor}>About</StyledH2>
      <StyledList>
        <StyledListItem>
          <StyledListItemIconContainer>
            <ScaleIcon />
            <StyledDarkParagraph>{weight / 10} kg</StyledDarkParagraph>
          </StyledListItemIconContainer>
          <StyledLightParagraph>Weight</StyledLightParagraph>
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIconContainer>
            <RulerIcon />
            <StyledDarkParagraph>{height / 10} m</StyledDarkParagraph>
          </StyledListItemIconContainer>
          <StyledLightParagraph>Height</StyledLightParagraph>
        </StyledListItem>
        <StyledListItem>
          <StyledListItemMoveTextContainer>
            <StyledDarkParagraph>Mega-Punch</StyledDarkParagraph>
            <StyledDarkParagraph>Fire-Punch</StyledDarkParagraph>
          </StyledListItemMoveTextContainer>
          <StyledLightParagraph>Moves</StyledLightParagraph>
        </StyledListItem>
      </StyledList>
      <StyledPokemonDescription>{description}</StyledPokemonDescription>
    </StyledSection>
  );
}
