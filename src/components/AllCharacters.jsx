import React from "react";
import Card from "./Card";
import styles from "../styles/CardGrid.module.css";
import OptionFilter from "./OptionFilter";

export default function LikedCharacters({
  personajes,
  addToLikedCards,
  setLikedCards,
  removeFromLikedCards,
  showModal,
  infoLocal,
  onFilter,
  filter,
}) {
  if (personajes.length < 1) return null;

  return (
    <>
      <h1 className={styles.characters}>All characters</h1>

      <OptionFilter onFilter={onFilter} filter={filter} />

      <article className={styles.cardGrid}>
        {personajes.map((personaje) => {
          return (
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
          );
        })}
      </article>
    </>
  );
}
