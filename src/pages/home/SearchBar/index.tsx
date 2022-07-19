import { ChangeEvent, useState } from "react";
import { StyledInput } from "./seachBar.style";

type Props = {
  setSearchData: Function;
};

export default function SearchBar({ setSearchData }: Props) {
  const handleSearchData = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
  };

  return (
    <form>
      <StyledInput
        type="search"
        placeholder="Procurar"
        onChange={handleSearchData}
      />
    </form>
  );
}
