import React from "react";
import { Skeleton } from "primereact/skeleton";

import styles from "../../styles/CardEpisode.module.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
export default function CardLoader() {
  return (
    <div className={styles.card}>
      <br />
      <div className={styles.centro}>
        <Skeleton height="20vh" width="35vh" className="mb-2"></Skeleton>
      </div>
      <br />

      <h1 className={styles.titulo}>
        <Skeleton width="70%" height="3.5vh" className="mb-2"></Skeleton>
      </h1>
      <h1 className={styles.overview}>
        {" "}
        <Skeleton width="100%" className="mb-2"></Skeleton>
      </h1>
      <p className={styles.rating}>
        <Skeleton width="5rem" className="mb-2"></Skeleton>
      </p>
      <p className={styles.number}>
        <Skeleton width="5rem" className="mb-2"></Skeleton>
      </p>
    </div>
  );
}
