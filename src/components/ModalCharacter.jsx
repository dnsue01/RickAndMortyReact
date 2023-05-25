import React from "react";
import styles from "../styles/Modal.module.css";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../services/useLanguage";
import useTraduction from "../services/useTraduction";

export default function Modal({ open, character, onClose }) {
  const [t, i18n] = useTranslation("global");
  const { language } = useLanguage();

  const gender = useTraduction(language, character.gender);
  const species = useTraduction(language, character.species);
  const status = useTraduction(language, character.status);
  const locationName = useTraduction(language, character.location.name);

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
                <h1>{t("ModalCharacter.Gender")}:</h1>
              </div>
              <div className={styles.help}>
                <h1>{gender}</h1>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.detalle}>
                <h1>{t("ModalCharacter.Species")}:</h1>
              </div>
              <div className={styles.help}>
                <h1>{species}</h1>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.detalle}>
                <h1>{t("ModalCharacter.Status")}:</h1>
              </div>
              {character.status === "Alive" && (
                <div className={styles.alive}>
                  <h1>{status}</h1>
                </div>
              )}

              {character.status === "Dead" && (
                <div className={styles.dead}>
                  <h1>{status}</h1>
                </div>
              )}
              {character.status === "unknown" && (
                <div className={styles.unknown}>
                  <h1>{status}</h1>
                </div>
              )}
            </div>

            <div className={styles.row}>
              <div className={styles.detalle}>
                <h1>{t("ModalCharacter.Lastlocation")}:</h1>
              </div>
              <div className={styles.help}>
                <h1>{locationName}</h1>
              </div>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}
