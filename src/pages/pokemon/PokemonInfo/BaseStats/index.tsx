import { TYPES } from "data/pokemonTypes";
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

type BaseStatsProps = {
  type: string;
  stats: object;
};

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
            {hp} <StyledStatBar />
          </StyledStatNumber>
          <StyledStatNumber>
            {atk} <StyledStatBar />
          </StyledStatNumber>
          <StyledStatNumber>
            {def} <StyledStatBar />
          </StyledStatNumber>
          <StyledStatNumber>
            {satk} <StyledStatBar />
          </StyledStatNumber>
          <StyledStatNumber>
            {sdef} <StyledStatBar />
          </StyledStatNumber>
          <StyledStatNumber>
            {spd} <StyledStatBar />
          </StyledStatNumber>
        </StyledStatDiv>
      </StyledDiv>
    </StyledSection>
  );
}
