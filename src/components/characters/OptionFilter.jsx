import React from "react";
import styles from "../../styles/Option.module.css";
import { useTranslation } from "react-i18next";

export default function OptionFilter({ onFilter, filter }) {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.centro}>
      <label htmlFor="All" className={styles.container}>
        {t("Filter.All")}
        <input
          type="radio"
          name="filter"
          value=""
          id="All"
          checked={filter === ""}
          onChange={onFilter}
        />
        <span className={styles.checkmark}></span>
      </label>
      <label htmlFor="Alive" className={styles.container}>
        {t("Filter.Alive")}
        <input
          type="radio"
          name="filter"
          value="Alive"
          id="Alive"
          checked={filter === "Alive"}
          onChange={onFilter}
        />
        <span className={styles.checkmark}></span>
      </label>
      <label htmlFor="Dead" className={styles.container}>
        {t("Filter.Dead")}
        <input
          type="radio"
          name="filter"
          value="Dead"
          id="Dead"
          checked={filter === "Dead"}
          onChange={onFilter}
        />
        <span className={styles.checkmark}></span>
      </label>
      <label htmlFor="unknown" className={styles.container}>
        {t("Filter.Unknown")}
        <input
          type="radio"
          name="filter"
          value="unknown"
          id="unknown"
          checked={filter === "unknown"}
          onChange={onFilter}
        />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
}
