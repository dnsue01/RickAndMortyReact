import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../styles/CardGrid.module.css";
import LikedCharacters from "./LikedCharacters";

const CardList = ({ personajes, showModal, palabraBuscada }) => {
  let API_2 = `https://rickandmortyapi.com/api/character/?name=${palabraBuscada}`;

  const [personajesBuscados, setPersonajesBuscados] = useState(personajes);

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
        } else {
          console.log("tonto");
        }
      } catch (error) {}
    } else {
      setPersonajesBuscados(personajes);
    }
  };

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

      <h1 className={styles.characters}>All characters</h1>
      <article className={styles.cardGrid}>
        {personajesBuscados.map((personaje) => (
          <div key={personaje.id}>
            <Card
              personaje={personaje}
              addToLikedCards={addToLikedCards}
              setLikedCards={setLikedCards}
              removeFromLikedCards={removeFromLikedCards}
              showModal={showModal}
              isLiked={JSON.stringify(infoLocal).includes(
                JSON.stringify(personaje)
              )}
            />
          </div>
        ))}
      </article>
    </>
  );
};

export default CardList;
