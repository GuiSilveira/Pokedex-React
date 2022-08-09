export function formatPokemonNumber(number) {
  return "#" + ("" + number).padStart(3, "0");
}
