import styles from "../styles/Categories.module.css";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <>
      <div className={styles.categorias}>
        <Link to="/">
          {" "}
          <h1 className={styles.categoria}>Characters</h1>
        </Link>

        <Link to="episodes">
          <h1 className={styles.categoria}>Episodes</h1>
        </Link>
      </div>
    </>
  );
};

export default Categories;
