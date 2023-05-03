import React, { useState, useEffect } from "react";
import LikedCharacters from "./LikedCharacters";
import AllCharacters from "./AllCharacters";

const CardList = ({ personajes, showModal, palabraBuscada }) => {
  //api para buscar personajes concreetos
  let API_2 = `https://rickandmortyapi.com/api/character/?name=${palabraBuscada}`;

  const [personajesBuscados, setPersonajesBuscados] = useState(personajes);
  const [filter, setFilter] = useState("Medium");
  useEffect(() => {
    fetchApiData();
  }, [palabraBuscada, personajes]);

  const fetchApiData = async () => {
    let data;
    if (palabraBuscada !== "") {
      try {
        const response = await fetch(API_2);
        if (response.ok) {
          data = await response.json();
          setPersonajesBuscados(data.results);
        }
      } catch (error) {}
    } else {
      setPersonajesBuscados(personajes);
    }
  };

  //si personajes del localstorage
  let infoLocal =
    JSON.parse(localStorage.getItem("likedCharacters")) !== undefined
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
    setFilter(e.target.value);
  };
  return (
    <>
      {likedCards.length > 0 && (
        <LikedCharacters
          personajes={likedCards}
          addToLikedCards={addToLikedCards}
          setLikedCards={setLikedCards}
          removeFromLikedCards={removeFromLikedCards}
          showModal={showModal}
        />
      )}

      <AllCharacters
        personajes={personajesBuscados}
        addToLikedCards={addToLikedCards}
        setLikedCards={setLikedCards}
        removeFromLikedCards={removeFromLikedCards}
        showModal={showModal}
        infoLocal={infoLocal}
        onFilter={onFilter}
        filter={filter}
      />
    </>
  );
};

export default CardList;
