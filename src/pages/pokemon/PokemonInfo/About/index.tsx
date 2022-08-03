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
            <p>8,5 kg</p>
          </StyledListItemIconContainer>
          <p>Weight</p>
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIconContainer>
            <RulerIcon />
            <p>0,6 m</p>
          </StyledListItemIconContainer>
          <p>Height</p>
        </StyledListItem>
        <StyledListItem>
          <StyledListItemMoveTextContainer>
            <p>Mega-Punch</p>
            <p>Fire-Punch</p>
          </StyledListItemMoveTextContainer>
          <p>Moves</p>
        </StyledListItem>
      </StyledList>
      <p>asdasdasdasd</p>
    </StyledSection>
  );
}
