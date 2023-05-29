import React from "react";
import Card from "./Card";
import styles from "../../styles/CardGrid.module.css";
import OptionFilter from "./OptionFilter";
import { useTranslation } from "react-i18next";
export default function LikedCharacters({
  characters,
  addToLikedCards,
  setLikedCards,
  removeFromLikedCards,
  showModal,
  infoLocal,
  onFilter,
  filter,
}) {
  const [t, i18n] = useTranslation("global");
  if (characters.length < 1) return null;

  return (
    <>
      <h1 className={styles.characters}>{t("Characters.AllCharacters")}</h1>

      <OptionFilter onFilter={onFilter} filter={filter} />

      <article className={styles.cardGrid}>
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <Card
                character={character}
                addToLikedCards={addToLikedCards}
                setLikedCards={setLikedCards}
                removeFromLikedCards={removeFromLikedCards}
                showModal={showModal}
                isLiked={JSON.stringify(infoLocal).includes(
                  JSON.stringify(character)
                )}
              />
            </div>
          );
        })}
      </article>
    </>
  );
}
