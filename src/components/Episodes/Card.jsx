import useFetch from "../../services/useFetch";
import React, { useState } from "react";
import styles from "../../styles/CardEpisode.module.css";
import CardLoader from "./CardLoader";
export default function Card({ episode }) {
  let season = episode.episode.slice(0, 3);
  season = season.slice(1);
  season = parseInt(season);

  let episodeN = episode.episode.slice(-2);
  episodeN = parseInt(episodeN);

  const [api, setApi] = useState(
    `https://api.themoviedb.org/3/tv/60625/season/${season}/episode/${episodeN}?api_key=a510cc1f2585d3b3b02b4a71f0ae8b72`
  );
  const { data, loading, error } = useFetch(api);

  if (loading || !data) {
    return (
      <>
        {" "}
        <CardLoader />
      </>
    );
  }
  const urlImg = "https://image.tmdb.org/t/p/original/";

  return (
    <div className={styles.card}>
      <div className={styles.centro}>
        <img src={`${urlImg}${data.still_path}`} alt="" />
      </div>

      <h1 className={styles.titulo}>{episode.name}</h1>
      <h1 className={styles.overview}>{data.overview}</h1>
      <p className={styles.rating}>
        Rating:
        <span className={styles.rating_number}> {data.vote_average}</span>
      </p>
      <p className={styles.number}>{episode.episode}</p>
    </div>
  );
}
