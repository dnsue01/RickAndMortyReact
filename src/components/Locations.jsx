import React, { useEffect, useState } from "react";
import useFetch from "../services/useFetch";

function Locations({ searchedWord }) {
  //paginacion
  const [numPage, setnumPag] = useState(1);
  const [maxPages, setmaxPages] = useState(7);
  const [Api, setAPi] = useState(
    `https://rickandmortyapi.com/api/location?page=${numPage}`
  );
  const { data, loading, error } = useFetch(Api);
  if (loading || !data) {
    return (
      <>
        <h1>LOADING...</h1>
      </>
    );
  } else {
    console.log(data);
  }

  return <></>;
}

export default Locations;
