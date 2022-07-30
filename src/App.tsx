import { AppRouter } from "routes/routes";
import { Reset } from "styles/Reset.style";
import { GlobalStyles } from "./styles/App.style";

function App() {
  return (
    <>
      <AppRouter />
      <Reset />
      <GlobalStyles />
    </>
  );
}

export default App;
