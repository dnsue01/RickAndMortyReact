import React, { useState, useEffect } from "react";
import styles from "../styles/ModalEpisode.module.css";
import CharacterCircles from "./CharacterCircles";

export default function Modal({ open, episode, onClose }) {
  const [characters, setCharacters] = useState([]);
  const [charactersData, setCharacterData] = useState([]);
  const [character, setCharacter] = useState(null);
  const [openCharacters, setOpencharacters] = useState(false);

  if (!open) {
    return null;
  }

  async function fetchCharacterData(character) {
    // Implement your own fetch method here to retrieve character data
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
              <img
                className={styles.icon}
                src={`${urlImg}${episode.data.still_path}`}
                alt=""
              />
            </div>

            {charactersData.length > 0 && (
              <CharacterCircles characters={charactersData} />
            )}

            <h1 className={styles.title}>{episode.data.name}</h1>
            <h1 className={styles.overview}>{episode.data.overview}</h1>

            {!openCharacters && (
              <button onClick={showCharacters}>ver personajes</button>
            )}

            <div className={styles.centro}>
              <div className={styles.row}>
                <div className={styles.rating}>
                  <h1 className={styles.title}>
                    {" "}
                    Rating:
                    <span className={styles.rating_number}>
                      {" "}
                      {episode.data.vote_average}
                    </span>
                  </h1>
                </div>
                <div className={styles.season}>
                  <h1 className={styles.title}>{episode.episode.episode}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
