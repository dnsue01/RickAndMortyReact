import React from "react";
import Card from "./Card";
import styles from "../styles/CardGrid.module.css";
import { useState } from "react";
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
      <input
        type="radio"
        name="filter"
        value="Regular"
        id="regular"
        checked={filter === "Regular"}
        onChange={onFilter}
      />
      <label htmlFor="regular">Regular</label>

      <input
        type="radio"
        name="filter"
        value="Medium"
        id="medium"
        checked={filter === "Medium"}
        onChange={onFilter}
      />
      <label htmlFor="medium">Medium</label>

      <input
        type="radio"
        name="filter"
        value="Large"
        id="large"
        checked={filter === "Large"}
        onChange={onFilter}
      />
      <label htmlFor="large">Large</label>
      <h1 className={styles.characters}>All characters</h1>
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
