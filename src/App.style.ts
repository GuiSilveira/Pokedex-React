import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@800&family=Poppins:wght@400;700&display=swap");

  :root {
    --size-1: .8rem;
    --size-2: 1.2rem;
    --size-3: 1.4rem;
    --size-4: 1.6rem;
    --size-5: 2.4rem;
    --size-6: 3.2rem;

    font-family: "Poppins", sans-serif;
    font-size: 10px;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
