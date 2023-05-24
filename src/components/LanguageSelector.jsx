import React from "react";
import france from "../resources/france.png";
import uk from "../resources/united-kingdom.png";
import spain from "../resources/spain.png";
import styles from "../styles/LanguageSelector.module.css";
import { useLanguage } from "../services/useLanguage";

export default function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();
  const [flag, setFlag] = React.useState(uk);

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);

    switch (selectedLanguage) {
      case "Fr":
        setFlag(france);
        break;
      case "En":
        setFlag(uk);
        break;
      case "Es":
        setFlag(spain);
        break;
      default:
        setFlag(uk);
        break;
    }
  };

  return (
    <div className={styles.center}>
      <div className={styles.languageSelector}>
        <img src={flag} alt="language flag" className={styles.flag} />
        <select value={language} onChange={handleChange}>
          <option value="En">En</option>
          <option value="Fr">Fr</option>
          <option value="Es">Es</option>
        </select>
      </div>
    </div>
  );
}
