import useFetch from "../../services/useFetch";
import React, { useState, useEffect } from "react";
import styles from "../../styles/CardEpisode.module.css";
import CardLoader from "./CardLoader";
export default function Card({ episode, showModal, languajeSelected }) {
  let completo;
  let rating;
  let season = episode.episode.slice(0, 3);
  season = season.slice(1);
  season = parseInt(season);

  let episodeN = episode.episode.slice(-2);
  episodeN = parseInt(episodeN);

  const [api, setApi] = useState(
    `https://api.themoviedb.org/3/tv/60625/season/${season}/episode/${episodeN}?api_key=a510cc1f2585d3b3b02b4a71f0ae8b72&language=${languajeSelected}`
  );

  useEffect(() => {
    const newApi = `https://api.themoviedb.org/3/tv/60625/season/${season}/episode/${episodeN}?api_key=a510cc1f2585d3b3b02b4a71f0ae8b72&language=${languajeSelected}`;
    setApi(newApi);
  }, [languajeSelected]);

  const { data, loading, error } = useFetch(api);

  if (loading || !data) {
    return (
      <>
        {" "}
        <CardLoader />
      </>
    );
  } else {
    completo = { episode, data };
    rating = Math.round(data.vote_average);
  }
  const urlImg = "https://image.tmdb.org/t/p/original/";

  return (
    <div className={styles.card}>
      <div className={styles.centro}>
        <div className={styles.container}>
          <img
            src={`${urlImg}${data.still_path}`}
            alt=""
            onClick={() => showModal(completo)}
          />
          <div className={styles.top_right}>
            <p className={styles.rating}>{episode.episode}</p>
          </div>
        </div>
      </div>
      <h1 className={styles.titulo}>{data.name}</h1>
      <div className={styles}>
        <div className={styles.topLeft}>
          <p className={styles.rating}>Vote Count: {data.vote_count}</p>
        </div>
        <div className={styles.topRight}>
          <p className={styles.number}>Season {season}</p>
        </div>
        <div className={styles.botLeft}>
          <p className={styles.rating}>
            Rating:
            <span className={styles.rating_number}> {rating}</span>
          </p>
        </div>
        <div className={styles.botRigth}>
          <p className={styles.number}>Episode {episodeN}</p>
        </div>
      </div>
    </div>
  );
  /*
  

      
  */
}
