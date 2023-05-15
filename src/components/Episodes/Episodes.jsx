import React, { useEffect, useState } from "react";
import useFetch from "../../services/useFetch";
import EpesisodesList from "./EpisodesList";
import Pagination from "../Pagination";

function Episodes({ searchedWord }) {
  //paginacion
  const [numPage, setnumPag] = useState(1);
  const [maxPages, setmaxPages] = useState(3);
  const [Api, setAPi] = useState(
    `https://rickandmortyapi.com/api/episode?page=${numPage}`
  );
  const { data, loading, error } = useFetch(Api);

  function change(numPag) {
    console.log("page " + numPag);
    const newApi = `https://rickandmortyapi.com/api/episode?page=${numPag}`;
    setnumPag(numPag);
    setAPi(newApi);
  }

  if (loading || !data) {
    return (
      <>
        <h1>LOADING...</h1>
      </>
    );
  }
  const { results: episodes } = data;

  return (
    <>
      <EpesisodesList episodes={episodes} />
      {searchedWord === "" && (
        <Pagination numPage={numPage} change={change} maxPages={maxPages} />
      )}
    </>
  );
}

export default Episodes;
