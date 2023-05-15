import React from "react";
import { Skeleton } from "primereact/skeleton";

import styles from "../../styles/card.module.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
export default function CardLoader() {
  return (
    <article className={styles.card}>
      <figure className={styles.centro}>
        <Skeleton shape="circle" size="17vh"></Skeleton>
      </figure>

      <h3 className={styles.centro}>
        <Skeleton height="1rem" width="50%" className="mb-2"></Skeleton>
      </h3>

      <section className={styles.like}>
        <Skeleton shape="circle" size="3.55rem" className="mr-2"></Skeleton>
      </section>
    </article>
  );
}
