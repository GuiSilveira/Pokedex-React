import { TYPES } from "data/pokemonTypes";
import { StyledH2 } from "styles/sectionTitle.style";
import { isGreaterThanOneHundred } from "utils/isGreaterThanOneHundred";
import {
  StyledDiv,
  StyledSection,
  StyledStatBar,
  StyledStatDiv,
  StyledStatName,
  StyledStatNameDiv,
  StyledStatNumber,
  StyledStatBarContainer,
} from "./baseStats.style";

type BaseStatsProps = {
  type: string;
  stats: object;
};

interface StyledStatBarProps {
  bg: string;
}

export default function BaseStats({ type, stats }: BaseStatsProps) {
  const hp = stats[0].base_stat;
  const atk = stats[1].base_stat;
  const def = stats[2].base_stat;
  const satk = stats[3].base_stat;
  const sdef = stats[4].base_stat;
  const spd = stats[5].base_stat;

  return (
    <StyledSection>
      <StyledH2 color={TYPES[type].color}>Base Stats</StyledH2>
      <StyledDiv>
        <StyledStatNameDiv>
          <StyledStatName color={TYPES[type].color}>HP</StyledStatName>
          <StyledStatName color={TYPES[type].color}>ATK</StyledStatName>
          <StyledStatName color={TYPES[type].color}>DEF</StyledStatName>
          <StyledStatName color={TYPES[type].color}>SATK</StyledStatName>
          <StyledStatName color={TYPES[type].color}>SDEF</StyledStatName>
          <StyledStatName color={TYPES[type].color}>SPD</StyledStatName>
        </StyledStatNameDiv>
        <StyledStatDiv>
          <StyledStatNumber>
            {hp}
            <StyledStatBarContainer>
              <StyledStatBar
                widthSize={isGreaterThanOneHundred(hp)}
                color={TYPES[type].color}
              />
            </StyledStatBarContainer>
          </StyledStatNumber>
          <StyledStatNumber>
            {atk}
            <StyledStatBarContainer>
              <StyledStatBar
                widthSize={isGreaterThanOneHundred(atk)}
                color={TYPES[type].color}
              />
            </StyledStatBarContainer>
          </StyledStatNumber>
          <StyledStatNumber>
            {def}
            <StyledStatBarContainer>
              <StyledStatBar
                widthSize={isGreaterThanOneHundred(def)}
                color={TYPES[type].color}
              />
            </StyledStatBarContainer>
          </StyledStatNumber>
          <StyledStatNumber>
            {satk}
            <StyledStatBarContainer>
              <StyledStatBar
                widthSize={isGreaterThanOneHundred(satk)}
                color={TYPES[type].color}
              />
            </StyledStatBarContainer>
          </StyledStatNumber>
          <StyledStatNumber>
            {sdef}
            <StyledStatBarContainer>
              <StyledStatBar
                widthSize={isGreaterThanOneHundred(sdef)}
                color={TYPES[type].color}
              />
            </StyledStatBarContainer>
          </StyledStatNumber>
          <StyledStatNumber>
            {spd}
            <StyledStatBarContainer>
              <StyledStatBar
                widthSize={isGreaterThanOneHundred(spd)}
                color={TYPES[type].color}
              />
            </StyledStatBarContainer>
          </StyledStatNumber>
        </StyledStatDiv>
      </StyledDiv>
    </StyledSection>
  );
}
