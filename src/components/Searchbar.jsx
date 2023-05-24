import styles from "../styles/SearchBar.module.css";
import React from "react";

const SearchBar = ({ search }) => {
  return (
    <div className={styles.search}>
      <div className={styles.input_with_button}>
        <input
          type="text"
          name="bar"
          id="bar"
          placeholder=" Mr meeseeks searcher..."
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
