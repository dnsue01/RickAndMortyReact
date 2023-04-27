import React from "react";
import styles from "../styles/Pagination.module.css";

const Pagination = ({ numPag, changePrevious, changeNext }) => {
  return (
    <div className={styles.paginacion}>
      {numPag === "1" && (
        <button className={styles.oculto} onClick={changePrevious}>
          ⇦
        </button>
      )}
      {numPag !== "1" && <button onClick={changePrevious}>⇦</button>}
      <h1>{numPag}</h1>
      {numPag !== "42" && <button onClick={changeNext}>⇨</button>}
    </div>
  );
};

export default Pagination;
