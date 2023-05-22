import styles from "../../styles/ButtonLike.module.css";
import heartBold from "../../resources/heartbold.png";
import heart from "../../resources/heart.png";

const Like = ({ like, likeCLick }) => {
  return (
    <div className={styles.Like}>
      {like && <img onClick={likeCLick} src={heartBold} alt={"dislike"} />}
      {like === false && <img onClick={likeCLick} src={heart} alt={"like"} />}
    </div>
  );
};

export default Like;
