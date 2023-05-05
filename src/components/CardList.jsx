import React, { useState, useEffect } from "react";
import LikedCharacters from "./LikedCharacters";
import AllCharacters from "./AllCharacters";
import Pagination from "./Pagination";

const CardList = ({ characters, showModal, palabraBuscada }) => {
  const [filter, setFilter] = useState("");
  const [numPage, setnumPag] = useState(1);
  const [maxPages, setmaxPages] = useState(0);

  let api = `https://rickandmortyapi.com/api/character/?name=${palabraBuscada}&&status=${filter}&&page=${numPage}`;

  const [charactersBuscados, setPersonajesBuscados] = useState(characters);

  useEffect(() => {
    fetchApiData();
  }, [characters, filter, api, maxPages]);

  const fetchApiData = async () => {
    let data;
    if (palabraBuscada !== "" || filter) {
      try {
        const response = await fetch(api);
        if (response.ok) {
          data = await response.json();
          setPersonajesBuscados(data.results);
          setmaxPages(data.info.pages);
        }
      } catch (error) {}
    } else {
      setmaxPages(0);
      setPersonajesBuscados(characters);
    }
  };

  //si characters del localstorage
  let infoLocal =
    JSON.parse(localStorage.getItem("likedCharacters")) !== null
      ? JSON.parse(localStorage.getItem("likedCharacters"))
      : [];

  const [likedCards, setLikedCards] = useState(infoLocal);

  const addToLikedCards = (personaje) => {
    if (!likedCards.some((card) => card.id === personaje.id)) {
      const updatedLikedCards = [...likedCards, personaje];
      setLikedCards(updatedLikedCards);
      localStorage.setItem(
        "likedCharacters",
        JSON.stringify(updatedLikedCards)
      );
    }
  };

  const removeFromLikedCards = (personaje) => {
    setLikedCards(likedCards.filter((card) => card.id !== personaje.id));
    const updatedLikedCards = likedCards.filter(
      (card) => card.id !== personaje.id
    );
    localStorage.setItem("likedCharacters", JSON.stringify(updatedLikedCards));
  };

  const onFilter = (e) => {
    let filtro = e.target.value;
    setFilter(filtro);
    api = `https://rickandmortyapi.com/api/character/?name=${palabraBuscada}&&status=${filtro}&&page=${numPage}`;
  };

  function change(numPag) {
    api = `https://rickandmortyapi.com/api/character/?name=${palabraBuscada}&&status=${filter}&&page=${numPage}`;
    setnumPag(numPag);
  }
  return (
    <>
      {likedCards.length > 0 && (
        <LikedCharacters
          characters={likedCards}
          addToLikedCards={addToLikedCards}
          setLikedCards={setLikedCards}
          removeFromLikedCards={removeFromLikedCards}
          showModal={showModal}
        />
      )}

      <AllCharacters
        characters={charactersBuscados}
        addToLikedCards={addToLikedCards}
        setLikedCards={setLikedCards}
        removeFromLikedCards={removeFromLikedCards}
        showModal={showModal}
        infoLocal={infoLocal}
        onFilter={onFilter}
        filter={filter}
      />
      {maxPages > 1 && (
        <Pagination numPage={numPage} change={change} maxPages={maxPages} />
      )}
    </>
  );
};

export default CardList;
