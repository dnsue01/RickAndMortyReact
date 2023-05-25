import styles from "../../styles/card.module.css";
import Like from "./Like";
import { useState } from "react";
import axios from "axios";
function Card({
  personaje,
  addToLikedCards,
  removeFromLikedCards,
  showModal,
  isLiked,
}) {
  const [onLike, setOnlike] = useState(isLiked);

  const changeLikeStatus = () => {
    setOnlike(!onLike);

    if (!onLike) {
      addToLikedCards(personaje);
    } else {
      removeFromLikedCards(personaje);
    }
  };

  return (
    <article className={styles.card}>
      <figure className={styles.portal}>
        <img
          className={styles.profile}
          src={personaje.image}
          alt={personaje.id}
          onClick={() => showModal(personaje)}
        />
      </figure>
      <div className={styles.titleDiv}>
        <h3>{personaje.name}</h3>
      </div>

      <section className={styles.like}>
        <Like like={isLiked} likeCLick={changeLikeStatus} />
      </section>
    </article>
  );
}

export default Card;
