import styles from "../styles/Categories.module.css";
import LinkStyle from "./LinkStyle";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <>
      <div className={styles.categorias}>
        <LinkStyle to="/">
          {" "}
          <h1 className={styles.categoria}>Characters</h1>
        </LinkStyle>

        <LinkStyle to="episodes">
          <h1 className={styles.categoria}>Episodes</h1>
        </LinkStyle>
      </div>
    </>
  );
};

export default Categories;
