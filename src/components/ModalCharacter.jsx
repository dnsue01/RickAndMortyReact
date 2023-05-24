import React from "react";

import styles from "../styles/Modal.module.css";

export default function Modal({ open, character, onClose }) {
  if (!open) {
    return null;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlay} onClick={onClose} />
        <div className={styles.modal}>
          <center>
            <h1 onClick={onClose} className={styles.close}>
              x
            </h1>
            <div className={styles.imagen}>
              <img src={character.image} alt={character.id} />
              <h1>{character.name}</h1>
            </div>

            <div className={styles.row}>
              <div className={styles.detalle}>
                <h1>Gender:</h1>
              </div>
              <div className={styles.help}>
                <h1>{character.gender}</h1>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.detalle}>
                <h1>Species:</h1>
              </div>
              <div className={styles.help}>
                <h1>{character.species}</h1>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.detalle}>
                <h1>Status:</h1>
              </div>
              {character.status === "Alive" && (
                <div className={styles.alive}>
                  <h1>{character.status}</h1>
                </div>
              )}

              {character.status === "Dead" && (
                <div className={styles.dead}>
                  <h1>{character.status}</h1>
                </div>
              )}
              {character.status === "unknown" && (
                <div className={styles.unknown}>
                  <h1>{character.status}</h1>
                </div>
              )}
            </div>

            <div className={styles.row}>
              <div className={styles.detalle}>
                <h1>Last location:</h1>
              </div>
              <div className={styles.help}>
                <h1>{character.location.name}</h1>
              </div>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}
