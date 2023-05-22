import React from "react";
import logo from "../resources/Logo.png";
import styles from "../styles/Navbar.module.css";
import SearchBar from "./Searchbar";
import Categories from "./Categories";
import LanguageSelector from "./LanguageSelector";
export default function Nav({ search, languaje }) {
  return (
    <header>
      <section className={styles.navbar}>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
      </section>
      <LanguageSelector languaje={languaje} />
      <Categories />
      <section className={styles.search}>
        <SearchBar search={search} />
      </section>
    </header>
  );
}
