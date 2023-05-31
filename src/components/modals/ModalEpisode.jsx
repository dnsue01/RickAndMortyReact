import React, { useState, useEffect } from "react";
import styles from "../../styles/ModalEpisode.module.css";
import CharacterCircles from "../episodes/CharacterCircles";
import ModalCharacter from "./ModalCharacter";
import { useTranslation } from "react-i18next";

export default function Modal({ open, episode, onClose }) {
  const [characters, setCharacters] = useState([]);
  const [charactersData, setCharacterData] = useState([]);
  const [character, setCharacter] = useState(null);
  const [openCharacters, setOpencharacters] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [t, i18n] = useTranslation("global");
  if (!open) {
    return null;
  }

  async function fetchCharacterData(character) {
    try {
      const response = await fetch(character);
      const data = await response.json();
      setCharacterData((prevData) => [...prevData, data]);
    } catch (error) {
      console.error(error);
    }
  }

  function showCharacters() {
    setOpencharacters(true);
    setCharacters(episode.episode.characters);
    episode.episode.characters.forEach((character) => {
      fetchCharacterData(character);
    });
  }
  function cleanCharacters() {
    setOpencharacters(false);
    setCharacterData([]);
  }
  const CharacterClick = (character) => {
    setCharacter(character);
    setOpenModal(true);
  };

  const urlImg = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlay} onClick={onClose} />
        <div className={styles.modal}>
          <h1
            onClick={() => {
              onClose();
              cleanCharacters();
            }}
            className={styles.close}
          >
            x
          </h1>
          <div className={styles.scontainerM}>
            <div className={styles.centro}>
              <div className={styles.episodeAndImg}>
                <img
                  className={styles.icon}
                  src={`${urlImg}${episode.data.still_path}`}
                  alt=""
                />
                <div className={styles.top_right}>
                  <h3 className={styles.rating}>{episode.episode.episode}</h3>
                </div>
              </div>
            </div>

            {charactersData.length > 0 && (
              <CharacterCircles
                characters={charactersData}
                CharacterClick={CharacterClick}
              />
            )}

            <h1 className={styles.title}>{episode.data.name}</h1>
            <p className={styles.overview}>{episode.data.overview}</p>

            {!openCharacters && (
              <button onClick={showCharacters}>
                {t("ModalEpisode.SeeCharacters")}
              </button>
            )}

            <div className={styles.centro}>
              <div className={styles.row}>
                <div className={styles.season}>
                  <h1 className={styles.title}>
                    {" "}
                    {t("ModalEpisode.Votes")}:{episode.data.vote_count}
                  </h1>
                </div>
                <div className={styles.rating}>
                  <h1 className={styles.title}>
                    {" "}
                    {t("ModalEpisode.Rating")}:
                    <span className={styles.rating_number}>
                      {" "}
                      {episode.data.vote_average.toFixed(1)}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {character && (
        <ModalCharacter
          open={openModal}
          character={character}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
}
