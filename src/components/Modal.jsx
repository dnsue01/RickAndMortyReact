import React, { useState } from "react";
import alive from "../resources/alive.png";
import dead from "../resources/dead.png";
import male from "../resources/male.png";
import female from "../resources/female.png";

import styles from "../styles/Modal.module.css";

export default function Modal({ open, personaje, onClose }) {
  const [isBlur, setIsBlur] = useState(false);

  const handleBlur = () => {
    setIsBlur(true);
  };

  const handleFocus = () => {
    setIsBlur(false);
  };

  if (!open) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlay} onClick={onClose} />
        <div className={styles.modal} onBlur={handleBlur} onFocus={handleFocus}>
          <center>
            <h1 onClick={onClose} className={styles.close}>
              x
            </h1>
            <div className={styles.imagen}>
              <img src={personaje.image} alt={personaje.id} />
              <h1>{personaje.name}</h1>
            </div>

            <div className={styles.row}>
              <div className={styles.detalle}>
                <h1>Gender:</h1>
              </div>
              <div className={styles.help}>
                <h1>{personaje.gender}</h1>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.detalle}>
                <h1>Species:</h1>
              </div>
              <div className={styles.help}>
                <h1>{personaje.species}</h1>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.detalle}>
                <h1>Status:</h1>
              </div>
              {personaje.status == "Alive" && (
                <div className={styles.alive}>
                  <h1>{personaje.status}</h1>
                </div>
              )}

              {personaje.status == "Dead" && (
                <div className={styles.dead}>
                  <h1>{personaje.status}</h1>
                </div>
              )}
              {personaje.status == "unknown" && (
                <div className={styles.unknown}>
                  <h1>{personaje.status}</h1>
                </div>
              )}
            </div>
          </center>
        </div>
      </div>
    </>
  );
}
