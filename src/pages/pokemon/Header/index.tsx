import {
  StyledHeader,
  StyledDiv,
  StyledH1,
  StyledP,
  StyledButton,
} from "./header.style";
import { BiArrowBack } from "react-icons/bi";

export default function Header() {
  return (
    <StyledHeader>
      <StyledDiv>
        <StyledButton>
          <BiArrowBack />
        </StyledButton>
        <StyledH1>Charmander</StyledH1>
      </StyledDiv>
      <StyledP>#004</StyledP>
    </StyledHeader>
  );
}
