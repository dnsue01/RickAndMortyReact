import styles from "../../styles/card.module.css";
import Like from "../Like";
import { useState } from "react";

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

      <h3>{personaje.name}</h3>
      <section className={styles.like}>
        <Like like={isLiked} likeCLick={changeLikeStatus} />
      </section>
    </article>
  );
}

export default Card;
