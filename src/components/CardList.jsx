import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../styles/CardGrid.module.css";
import LikedCharacters from "./LikedCharacters";

const CardList = ({ personajes, showModal }) => {
  let infoLocal =
    JSON.parse(localStorage.getItem("likedCharacters")) != undefined
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
        {personajes.map((personaje) => (
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
