import Header from "./Header";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import PokemonInfo from "./PokemonInfo";

export default function Pokemon() {
  return (
    <>
      <Header />
      <div>
        <button>
          <BiChevronLeft />
        </button>
        <button>
          <BiChevronRight />
        </button>
      </div>
      <PokemonInfo />
    </>
  );
}
