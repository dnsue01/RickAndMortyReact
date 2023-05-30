import React, { useEffect, useState } from "react";
import useFetch from "../../services/useFetch";
import EpisodesList from "./EpisodesList";
import Pagination from "../Pagination";
import CardLoader from "./CardLoader";
import Modal from "../modals/ModalEpisode";
import NoResults from "./NoResults";
function Episodes({ searchedWord }) {
  //paginacion
  const [numPage, setnumPag] = useState(1);
  const [maxPages, setmaxPages] = useState(0);
  const [Api, setAPi] = useState(
    `https://rickandmortyapi.com/api/episode?page=${numPage}&&name=${searchedWord}`
  );
  const [filter, setFilter] = useState("");
  const { data, loading, error } = useFetch(Api);
  const [episodes, SetEpisodes] = useState([]);

  //modal
  const [openModal, setopenModals] = useState(false);
  const [episode, SetEpisode] = useState();

  function change(numPag) {
    const newApi = `https://rickandmortyapi.com/api/episode?page=${numPag}&&name=${searchedWord}`;
    setnumPag(numPag);
    setAPi(newApi);
  }

  const onFilter = (e) => {
    let filterOp = e.target.value;
    let filterEpi = selectFilter(filterOp);
    setFilter(filterOp);
    let api = `https://rickandmortyapi.com/api/episode/${filterEpi}`;
    SetEpisodes([]);
    setAPi(api);
  };

  function showModal(episode) {
    SetEpisode(episode);
    setopenModals(true);
  }
  function selectFilter(filter) {
    const filterMap = {
      "": "",
      S1: "1,2,3,4,5,6,7,8,9,10,11",
      S2: "12,13,14,15,16,17,18,19,20,21",
      S3: "22,23,24,25,26,27,28,29,30,31",
      S4: "32,33,34,35,36,37,38,39,40,41",
      S5: "42,43,44,45,46,47,48,49,50,51",
    };

    return filterMap[filter] || "";
  }

  useEffect(() => {
    const newApi = `https://rickandmortyapi.com/api/episode?page=${numPage}&&name=${searchedWord}`;
    setAPi(newApi);
  }, [searchedWord]);

  useEffect(() => {
    if (data) {
      if (!data.error) {
        if (!data.results) {
          SetEpisodes(data);
        } else {
          const { results: episodesData } = data;
          SetEpisodes(episodesData);
          setmaxPages(data.info.pages);
        }
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
    return <NoResults />;
  } else {
    return (
      <>
        <EpisodesList
          episodes={episodes}
          onFilter={onFilter}
          filter={filter}
          showModal={showModal}
        />
        {searchedWord === "" && filter === "" && (
          <Pagination numPage={numPage} change={change} maxPages={maxPages} />
        )}

        {episode && (
          <Modal
            open={openModal}
            episode={episode}
            onClose={() => setopenModals(false)}
          />
        )}
      </>
    );
  }
}

export default Episodes;
