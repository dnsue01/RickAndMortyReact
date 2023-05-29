import React from "react";
import Card from "./Card";
import styles from "../../styles/CardGrid.module.css";

export default function LikedCharacters({
  characters,
  addToLikedCards,
  setLikedCards,
  removeFromLikedCards,
  showModal,
}) {
  if (characters.length < 1) return null;

  return (
    <>
      <h1 className={styles.characters}>Liked characters</h1>
      <article className={styles.cardGrid}>
        {characters.slice(0, 5).map((character) => {
          return (
            <div key={character.id}>
              <Card
                character={character}
                addToLikedCards={addToLikedCards}
                setLikedCards={setLikedCards}
                removeFromLikedCards={removeFromLikedCards}
                showModal={showModal}
                isLiked={true}
              />
            </div>
          );
        })}
      </article>
    </>
  );
}
