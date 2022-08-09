import {
  StyledHeader,
  StyledDiv,
  StyledH1,
  StyledP,
  StyledButton,
} from "./header.style";
import { BiArrowBack } from "react-icons/bi";
import { firstLetterToUppercase } from "utils/firstLetterToUppercase";
import { formatPokemonNumber } from "utils/formatPokemonNumber";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  id: number;
  name: string;
};

export default function Header({ id, name }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledDiv>
        <StyledButton onClick={() => navigate("/")}>
          <BiArrowBack />
        </StyledButton>
        <StyledH1>{firstLetterToUppercase(name)}</StyledH1>
      </StyledDiv>
      <StyledP>{formatPokemonNumber(id)}</StyledP>
    </StyledHeader>
  );
}
