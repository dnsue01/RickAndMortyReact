import styles from "../styles/Categories.module.css";
import LinkStyle from "./LinkStyle";
import { useTranslation } from "react-i18next";
const Categories = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className={styles.categorias}>
        <LinkStyle to="/">
          {" "}
          <h1 className={styles.categoria}>{t("Categories.Characters")}</h1>
        </LinkStyle>

        <LinkStyle to="episodes">
          <h1 className={styles.categoria}>{t("Categories.Episodes")}</h1>
        </LinkStyle>
      </div>
    </>
  );
};

export default Categories;
