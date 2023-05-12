import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./characters/Characters";
import { useState } from "react";
import Nav from "./Navbar";
import Locations from "./Locations";
import Episodes from "./Episodes/Episodes";
const CardGrid = () => {
  //buscador
  function search(palabra) {
    SetSearchedWord(palabra);
  }
  //buscador
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
            path="/locations"
            element={<Locations searchedWord={searchedWord} />}
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
