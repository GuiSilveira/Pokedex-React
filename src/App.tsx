import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";
import Pokemon from "./pages/pokemon/Pokemon";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
