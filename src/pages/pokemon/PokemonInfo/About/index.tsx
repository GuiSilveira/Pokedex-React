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
import { ReactComponent as RulerIcon } from "assets/svg/Ruler.svg";
import { ReactComponent as ScaleIcon } from "assets/svg/Scale.svg";

export default function About() {
  return (
    <StyledSection>
      <StyledFigure>
        <StyledImg src={pokemonShadow} alt="Pokemon Image" />
        <StyledFigCaption>Fire</StyledFigCaption>
      </StyledFigure>
      <StyledH2>About</StyledH2>
      <StyledList>
        <StyledListItem>
          <StyledListItemIconContainer>
            <ScaleIcon />
            <StyledDarkParagraph>8,5 kg</StyledDarkParagraph>
          </StyledListItemIconContainer>
          <StyledLightParagraph>Weight</StyledLightParagraph>
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIconContainer>
            <RulerIcon />
            <StyledDarkParagraph>0,6 m</StyledDarkParagraph>
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
