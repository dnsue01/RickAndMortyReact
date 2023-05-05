import React, { useState } from "react";
import styles from "../styles/Pagination.module.css";

const Pagination = ({ numPage, maxPages, change }) => {
  let nextPage = numPage + 1 <= maxPages ? numPage + 1 : maxPages;

  let prevPage = numPage - 1 <= 1 ? 1 : numPage - 1;

  function changePrevious() {
    change(prevPage);
  }
  function changeNext() {
    change(nextPage);
  }

  return (
    <div className={styles.paginacion}>
      {numPage == 1 && (
        <button className={styles.oculto} onClick={changePrevious}>
          ⇦
        </button>
      )}
      {numPage !== 1 && <button onClick={changePrevious}>⇦</button>}
      <h1>{numPage}</h1>
      {numPage !== maxPages && <button onClick={changeNext}>⇨</button>}
    </div>
  );
};

export default Pagination;
