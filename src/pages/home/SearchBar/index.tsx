import { ChangeEvent, useState } from "react";
import { StyledInput } from "./seachBar.style";

type Props = {
  setSearchedData: Function;
};

export default function SearchBar({ setSearchedData }: Props) {
  const handleSearchedData = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchedData(event.target.value);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <StyledInput
        type="search"
        placeholder="Procurar"
        onChange={handleSearchedData}
      />
    </form>
  );
}
