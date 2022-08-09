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
} from "./about.style";
import pokemonShadow from "assets/svg/pokemonShadow.svg";
import { firstLetterToUppercase } from "utils/firstLetterToUppercase";
import { ReactComponent as RulerIcon } from "assets/svg/Ruler.svg";
import { ReactComponent as ScaleIcon } from "assets/svg/Scale.svg";
import { TYPES } from "data/pokemonTypes";

type AboutProps = {
  sprite: string;
  type: string;
  height: number;
  weight: number;
};

export default function About({ sprite, type, height, weight }: AboutProps) {
  return (
    <StyledSection>
      <StyledFigure>
        <StyledImg src={pokemonShadow} alt="Pokemon Image" />
        <StyledFigCaption color={TYPES[type].color}>
          {firstLetterToUppercase(type)}
        </StyledFigCaption>
      </StyledFigure>
      <StyledH2 color={TYPES[type].color}>About</StyledH2>
      <StyledList>
        <StyledListItem>
          <StyledListItemIconContainer>
            <ScaleIcon />
            <StyledDarkParagraph>{weight} kg</StyledDarkParagraph>
          </StyledListItemIconContainer>
          <StyledLightParagraph>Weight</StyledLightParagraph>
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIconContainer>
            <RulerIcon />
            <StyledDarkParagraph>{height} m</StyledDarkParagraph>
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
      <StyledPokemonDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis
        eros vitae tellus condimentum maximus sit amet in eros.
      </StyledPokemonDescription>
    </StyledSection>
  );
}
