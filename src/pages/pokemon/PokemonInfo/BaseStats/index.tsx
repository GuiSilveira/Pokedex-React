import { StyledH2 } from "styles/sectionTitle.style";
import {
  StyledDiv,
  StyledSection,
  StyledStatBar,
  StyledStatDiv,
  StyledStatName,
  StyledStatNameDiv,
  StyledStatNumber,
} from "./baseStats.style";

export default function BaseStats() {
  return (
    <StyledSection>
      <StyledH2>Base Stats</StyledH2>
      <StyledDiv>
        <StyledStatNameDiv>
          <StyledStatName>HP</StyledStatName>
          <StyledStatName>ATK</StyledStatName>
          <StyledStatName>DEF</StyledStatName>
          <StyledStatName>SATK</StyledStatName>
          <StyledStatName>SDEF</StyledStatName>
          <StyledStatName>SPD</StyledStatName>
        </StyledStatNameDiv>
        <StyledStatDiv>
          <StyledStatNumber>
            045 <StyledStatBar />
          </StyledStatNumber>
          <StyledStatNumber>
            045 <StyledStatBar />
          </StyledStatNumber>
          <StyledStatNumber>
            045 <StyledStatBar />
          </StyledStatNumber>
          <StyledStatNumber>
            045 <StyledStatBar />
          </StyledStatNumber>
          <StyledStatNumber>
            045 <StyledStatBar />
          </StyledStatNumber>
          <StyledStatNumber>
            045 <StyledStatBar />
          </StyledStatNumber>
        </StyledStatDiv>
      </StyledDiv>
    </StyledSection>
  );
}
