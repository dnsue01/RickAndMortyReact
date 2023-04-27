import { useState } from "react";

export const fecth = async ({ type }, { number }) => {
  const API_CHARACTERS =
    "https://rickandmortyapi.com/api/character/?page=${number}";
  const API_PLACES = "https://rickandmortyapi.com/api/location?page=${number}";
  const API_EPISODES = "https://rickandmortyapi.com/api/episode?page=${number}";
  const API_CHARACTER = "https://rickandmortyapi.com/api/character/${number}";

  const [api, setApi] = useState();

  if (type) {
    switch (type) {
      case "characters":
        setApi(API_CHARACTERS);
        break;
      case "places":
        setApi(API_PLACES);
        break;
      case "epsidoes":
        setApi(API_EPISODES);
        break;
      case "character":
        setApi(API_CHARACTER);
        break;
    }
  } else {
    return null;
  }
};
