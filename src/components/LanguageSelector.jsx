import React, { useState } from "react";
import france from "../resources/france.png";
import uk from "../resources/united-kingdom.png";
import spain from "../resources/spain.png";
import styles from "../styles/LanguajeSelector.module.css";
export default function LanguageSelector({ languaje }) {
  const [selected, SetSelected] = useState("en");
  const [flag, setFlag] = useState(uk);
  const handleChange = (event) => {
    languaje(event.target.value);
    SetSelected(event.target.value);

    switch (event.target.value) {
      case "Fr":
        setFlag(france);
        break;
      case "En":
        setFlag(uk);
        break;
      case "Es":
        setFlag(spain);
        break;
    }
  };
  return (
    <div className={styles}>
      <img src={flag} alt={"dislike"}></img>
      <select onChange={handleChange}>
        <option>En</option>
        <option>Fr</option>
        <option>Es</option>
      </select>
    </div>
  );
}
