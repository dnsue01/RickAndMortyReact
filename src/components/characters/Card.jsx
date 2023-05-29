import styles from "../../styles/card.module.css";
import Like from "./Like";
import { useState } from "react";

function Card({
  character,
  addToLikedCards,
  removeFromLikedCards,
  showModal,
  isLiked,
}) {
  const [onLike, setOnlike] = useState(isLiked);

  const changeLikeStatus = () => {
    setOnlike(!onLike);

    if (!onLike) {
      addToLikedCards(character);
    } else {
      removeFromLikedCards(character);
    }
  };

  return (
    <article className={styles.card}>
      <figure className={styles.portal}>
        <img
          className={styles.profile}
          src={character.image}
          alt={character.id}
          onClick={() => showModal(character)}
        />
      </figure>
      <div className={styles.titleDiv}>
        <h3>{character.name}</h3>
      </div>

      <section className={styles.like}>
        <Like like={isLiked} likeCLick={changeLikeStatus} />
      </section>
    </article>
  );
}

export default Card;
