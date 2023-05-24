import React from "react";
import logo from "../resources/Logo.png";
import styles from "../styles/Navbar.module.css";
import SearchBar from "./Searchbar";
import Categories from "./Categories";
import LanguageSelector from "./LanguageSelector";

export default function Nav({ search }) {
  return (
    <header>
      <section className={styles.navbar}>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
      </section>
      <div className={styles.language}>
        <LanguageSelector />
      </div>
      <Categories />

      <SearchBar search={search} />
    </header>
  );
}
