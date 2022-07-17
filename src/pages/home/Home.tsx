import Logo from "./Logo";
import PokemonTable from "./PokemonTable";
import SearchBar from "./SearchBar";
import SortButton from "./SortButton";

export default function Home() {
  return (
    <main>
      <Logo />
      <SortButton />
      <SearchBar />
      <PokemonTable />
    </main>
  );
}
