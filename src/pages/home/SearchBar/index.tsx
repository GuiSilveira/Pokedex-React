import { ChangeEvent } from "react";
import { StyledInput } from "./seachBar.style";

type Props = {
  setSearchedData: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ setSearchedData }: Props) {
  const passingSearchedData = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchedData(event.target.value);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <StyledInput
        type="search"
        placeholder="Procurar"
        onChange={passingSearchedData}
      />
    </form>
  );
}
