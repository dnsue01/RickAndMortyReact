import React from "react";
import france from "../../resources/france.png";
import uk from "../../resources/united-kingdom.png";
import spain from "../../resources/spain.png";
import styles from "../../styles/LanguageSelector.module.css";
import { useLanguage } from "../../services/useLanguage";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();
  const [flag, setFlag] = React.useState(uk);
  const [t, i18n] = useTranslation("global");

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);

    switch (selectedLanguage) {
      case "fr":
        setFlag(france);
        i18n.changeLanguage("fr");
        break;
      case "en":
        setFlag(uk);
        i18n.changeLanguage("en");
        break;
      case "es":
        setFlag(spain);
        i18n.changeLanguage("es");
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
          <option value="en">En</option>
          <option value="fr">Fr</option>
          <option value="es">Es</option>
        </select>
      </div>
    </div>
  );
}
