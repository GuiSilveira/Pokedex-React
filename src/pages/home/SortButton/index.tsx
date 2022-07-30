import { StyledSortButton } from "./sortButton.style";
import { ReactComponent as SortByName } from "../../../assets/svg/Name.svg";

export default function SortButton() {
  function handleSort() {}

  return (
    <StyledSortButton onClick={handleSort} name="SortButton">
      <SortByName />
    </StyledSortButton>
  );
}
