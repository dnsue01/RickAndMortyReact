import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./characters/Characters";
import { useState } from "react";
import Nav from "./navbar/Navbar";
import Episodes from "./episodes/Episodes";
const CardGrid = () => {
  function search(word) {
    SetSearchedWord(word);
  }

  const [searchedWord, SetSearchedWord] = useState("");

  return (
    <section>
      <BrowserRouter>
        <Nav search={search} />
        <Routes>
          <Route
            path="/"
            element={<Characters searchedWord={searchedWord} />}
          />

          <Route
            path="/episodes"
            element={<Episodes searchedWord={searchedWord} />}
          />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default CardGrid;
