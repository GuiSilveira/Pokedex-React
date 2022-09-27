export function firstLetterToUppercase(word) {
  if (word.includes("-")) {
    return word
      .split("-")
      .map(
        (stringPart) => stringPart.charAt(0).toUpperCase() + stringPart.slice(1)
      )
      .join("-");
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
