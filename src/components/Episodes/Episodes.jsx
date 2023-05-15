import React, { useEffect, useState } from "react";
import useFetch from "../../services/useFetch";
import EpisodesList from "./EpisodesList";
import Pagination from "../Pagination";
import CardLoader from "./CardLoader";

function Episodes({ searchedWord }) {
  //paginacion
  const [numPage, setnumPag] = useState(1);
  const [maxPages, setmaxPages] = useState(0);
  const [Api, setAPi] = useState(
    `https://rickandmortyapi.com/api/episode?page=${numPage}&&name=${searchedWord}`
  );

  const { data, loading, error } = useFetch(Api);

  function change(numPag) {
    const newApi = `https://rickandmortyapi.com/api/episode?page=${numPag}&&name=${searchedWord}`;
    setnumPag(numPag);
    setAPi(newApi);
  }

  useEffect(() => {
    const newApi = `https://rickandmortyapi.com/api/episode?page=${numPage}&&name=${searchedWord}`;
    setAPi(newApi);
  }, [searchedWord]);

  useEffect(() => {
    if (data) {
      if (!data.error) {
        setmaxPages(data.info.pages);
      }
    }
  }, [data]);

  if (loading || !data) {
    return (
      <>
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
      </>
    );
  }

  if (data.error) {
    return <></>;
  } else {
    const { results: episodes } = data;

    return (
      <>
        <EpisodesList episodes={episodes} />
        {searchedWord === "" && (
          <Pagination numPage={numPage} change={change} maxPages={maxPages} />
        )}
        n
      </>
    );
  }
}

export default Episodes;
