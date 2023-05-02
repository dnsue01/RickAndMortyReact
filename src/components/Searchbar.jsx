import styles from "../styles/searchBar.module.css";
import React from "react";

const SearchBar = ({ buscar }) => {
  return (
    <>
      <div className={styles.input_with_button}>
        <input
          type="text"
          name="bar"
          id="bar"
          placeholder=" Mr meeseeks searcher..."
          onChange={(e) => {
            buscar(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default SearchBar;
