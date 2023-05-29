import React from "react";
import styles from "../../styles/Option.module.css";
import { useTranslation } from "react-i18next";
export default function OptionFilter({ onFilter, filter }) {
  const [t, i18n] = useTranslation("global");
  return (
    <div className={styles.centro}>
      <label htmlFor="All" className={styles.container}>
        All
        <input
          type="radio"
          name="filter"
          value=""
          id="All"
          checked={filter === ""}
          onChange={onFilter}
        />
        <span className={styles.checkmark}></span>
      </label>{" "}
      <label htmlFor="S1" className={styles.container}>
        S1
        <input
          type="radio"
          name="filter"
          value="S1"
          id="S1"
          checked={filter === "S1"}
          onChange={onFilter}
        />
        <span className={styles.checkmark}></span>
      </label>{" "}
      <label htmlFor="S2" className={styles.container}>
        S2
        <input
          type="radio"
          name="filter"
          value="S2"
          id="S2"
          checked={filter === "S2"}
          onChange={onFilter}
        />
        <span className={styles.checkmark}></span>
      </label>
      <label htmlFor="S3" className={styles.container}>
        S3
        <input
          type="radio"
          name="filter"
          value="S3"
          id="S3"
          checked={filter === "S3"}
          onChange={onFilter}
        />
        <span className={styles.checkmark}></span>
      </label>
      <label htmlFor="S4" className={styles.container}>
        S4
        <input
          type="radio"
          name="filter"
          value="S4"
          id="S4"
          checked={filter === "S4"}
          onChange={onFilter}
        />
        <span className={styles.checkmark}></span>
      </label>
      <label htmlFor="S5" className={styles.container}>
        S5
        <input
          type="radio"
          name="filter"
          value="S5"
          id="S5"
          checked={filter === "S5"}
          onChange={onFilter}
        />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
}
