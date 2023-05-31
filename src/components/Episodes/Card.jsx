import React, { useState, useEffect } from "react";
import styles from "../../styles/CardEpisode.module.css";
import CardLoader from "./CardLoader";
import { useLanguage } from "../../services/useLanguage";
import useFetch from "../../services/useFetch";
import { useTranslation } from "react-i18next";

export default function Card({ episode, showModal }) {
  const [t, i18n] = useTranslation("global");

  let complete;
  let rating;
  let season = episode.episode.slice(0, 3);
  season = season.slice(1);
  season = parseInt(season);

  let episodeN = episode.episode.slice(-2);
  episodeN = parseInt(episodeN);

  const { language } = useLanguage();

  const [api, setApi] = useState(
    `https://api.themoviedb.org/3/tv/60625/season/${season}/episode/${episodeN}?api_key=a510cc1f2585d3b3b02b4a71f0ae8b72&language=${language}`
  );

  useEffect(() => {
    const newApi = `https://api.themoviedb.org/3/tv/60625/season/${season}/episode/${episodeN}?api_key=a510cc1f2585d3b3b02b4a71f0ae8b72&language=${language}`;
    setApi(newApi);
  }, [language, season, episodeN]);

  const { data, loading } = useFetch(api);

  if (loading || !data) {
    return <CardLoader />;
  } else {
    complete = { episode, data };
    rating = data.vote_average.toFixed(1);
  }

  const urlImg = "https://image.tmdb.org/t/p/original/";
  return (
    <div className={styles.card}>
      <div className={styles.centro}>
        <div className={styles.container}>
          <img
            src={`${urlImg}${data.still_path}`}
            alt=""
            onClick={() => showModal(complete)}
          />
          <div className={styles.top_right}>
            <p className={styles.rating}>{episode.episode}</p>
          </div>
        </div>
      </div>
      <div className={styles.titleDiv}>
        <h1 className={styles.titulo}>{data.name}</h1>
      </div>
      <div className={styles}>
        <div className={styles.topLeft}>
          <p className={styles.rating}>
            {t("EpisodeCard.Votes")}: {data.vote_count}
          </p>
        </div>
        <div className={styles.topRight}>
          <p className={styles.number}>
            {t("EpisodeCard.Season")} {season}
          </p>
        </div>
        <div className={styles.botLeft}>
          <p className={styles.rating}>
            {t("EpisodeCard.Rating")}:
            <span className={styles.rating_number}> {rating}</span>
          </p>
        </div>
        <div className={styles.botRigth}>
          <p className={styles.number}>
            {" "}
            {t("EpisodeCard.Episode")} {episodeN}
          </p>
        </div>
      </div>
    </div>
  );
}
