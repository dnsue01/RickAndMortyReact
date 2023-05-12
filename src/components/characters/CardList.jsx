import React, { useState, useEffect } from "react";
import LikedCharacters from "./LikedCharacters";
import AllCharacters from "./AllCharacters";
import Pagination from "../Pagination";
import useLocalStorage from "../../services/useLocalStorage";

const CardList = ({ characters, showModal, searchedWord }) => {
  const [filter, setFilter] = useState("");
  const [numPage, setnumPag] = useState(1);
  const [maxPages, setmaxPages] = useState(0);
  const [localCharacters, setLocalCharacters] =
    useLocalStorage("likedCharacters");

  console.log(localCharacters);
  let api = `https://rickandmortyapi.com/api/character/?name=${searchedWord}&&status=${filter}&&page=${numPage}`;

  const [searchedCharacters, setSearchedCharacters] = useState(characters);

  useEffect(() => {
    fetchApiData();
  }, [characters, filter, api, maxPages]);

  const fetchApiData = async () => {
    let data;
    if (searchedWord !== "" || filter) {
      try {
        const response = await fetch(api);
        if (response.ok) {
          data = await response.json();
          setSearchedCharacters(data.results);
          setmaxPages(data.info.pages);
        }
      } catch (error) {}
    } else {
      setmaxPages(0);
      setSearchedCharacters(characters);
    }
  };

  //si characters del localstorage
  let infoLocal =
    localCharacters !== undefined ? JSON.parse(localCharacters) : [];

  const [likedCards, setLikedCards] = useState(infoLocal);

  const addToLikedCards = (personaje) => {
    if (!likedCards.some((card) => card.id === personaje.id)) {
      const updatedLikedCards = [...likedCards, personaje];
      setLikedCards(updatedLikedCards);

      setLocalCharacters(JSON.stringify(updatedLikedCards));
    }
  };

  const removeFromLikedCards = (personaje) => {
    setLikedCards(likedCards.filter((card) => card.id !== personaje.id));
    const updatedLikedCards = likedCards.filter(
      (card) => card.id !== personaje.id
    );
    setLocalCharacters(JSON.stringify(updatedLikedCards));
  };

  const onFilter = (e) => {
    let filtro = e.target.value;
    setFilter(filtro);
    api = `https://rickandmortyapi.com/api/character/?name=${searchedWord}&&status=${filtro}&&page=${numPage}`;
  };

  function change(numPag) {
    api = `https://rickandmortyapi.com/api/character/?name=${searchedWord}&&status=${filter}&&page=${numPage}`;
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
        characters={searchedCharacters}
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
