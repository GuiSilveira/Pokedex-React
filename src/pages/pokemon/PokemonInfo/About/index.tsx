import { StyledH2 } from "styles/sectionTitle.style";
import {
  StyledSection,
  StyledFigure,
  StyledFigCaption,
  StyledImg,
  StyledList,
} from "./about.style";
import pokemonShadow from "assets/svg/pokemonShadow.svg";

export default function About() {
  return (
    <StyledSection>
      <StyledFigure>
        <StyledImg src={pokemonShadow} alt="Pokemon Image" />
        <StyledFigCaption>Fire</StyledFigCaption>
      </StyledFigure>
      <StyledH2>About</StyledH2>
      <StyledList>
        <li>
          <p>8,5 kg</p>
          <p>Weight</p>
        </li>
        <li>
          <p>0,6 m</p>
          <p>Height</p>
        </li>
        <li>
          <p>Mega-Punch</p>
          <p>Fire-Punch</p>
          <p>Moves</p>
        </li>
      </StyledList>
      <p>asdasdasdasd</p>
    </StyledSection>
  );
}
