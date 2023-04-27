import React from "react";
import logo from "../resources/Logo.png";
import styles from "../styles/Navbar.module.css";
import SearchBar from "./Searchbar";
import Categories from "./Categories";

export default function Nav() {
  return (
    <header>
      <section className={styles.navbar}>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
      </section>
      <Categories />
      <section className={styles.search}>
        <SearchBar />
      </section>
    </header>
  );
}
