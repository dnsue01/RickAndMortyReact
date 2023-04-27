import styles from "../styles/Categories.module.css";

const Categories = () => {
  return (
    <>
      <div className={styles.categorias}>
        <h1 className={styles.categoria}>Characters</h1>
        <h1 className={styles.categoria}>Locations</h1>
        <h1 className={styles.categoria}>Episodes</h1>
      </div>
    </>
  );
};

export default Categories;
