import { StyledSortButton } from "./sortButton.style";
import { ReactComponent as SortByName } from "../../../assets/svg/Name.svg";

export default function SortButton() {
  return (
    <StyledSortButton name="SortButton">
      <SortByName />
    </StyledSortButton>
  );
}
