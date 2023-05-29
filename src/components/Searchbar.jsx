import styles from "../styles/SearchBar.module.css";
import React from "react";
import { useTranslation } from "react-i18next";

const SearchBar = ({ search }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className={styles.search}>
      <div className={styles.input_with_button}>
        <input
          type="text"
          name="bar"
          id="bar"
          placeholder={t("Searchbar.Searcher")}
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
