import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import Pagination from "../Pagination";
import Modal from "../ModalCharacter";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useFetch from "../../services/useFetch";
import CardLoader from "./CardLoader";
import styles from "../../styles/CardGrid.module.css";
import OptionFilter from "./OptionFilter";
import useLocalStorage from "../../services/useLocalStorage";

const Characters = ({ searchedWord }) => {
  // paginacion
  const [numPage, setNumPage] = useState(1);
  const [maxPages, setMaxPages] = useState(42);

  // api
  const [Api, setApi] = useState(
    `https://rickandmortyapi.com/api/character?page=${numPage}`
  );

  // modal
  const [openModal, setOpenModal] = useState(false);
  const [personaje, setPersonaje] = useState();

  // guardar en local
  const [Apis, setApis] = useLocalStorage(
    "urls",
    localStorage.getItem("urls") ? JSON.parse(localStorage.getItem("urls")) : []
  );

  const [dataLocal, setData] = useLocalStorage(
    "data",
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );

  const { data, loading, error } = useFetch(Api);

  // cambia al cambiar la api
  useEffect(() => {
    if (data) {
      if (!Apis.includes(Api)) {
        guardarLocalUrl(Api);
        guardarLocalData(data);
        setMaxPages(data.info.pages);
      }
    }
  }, [data]);

  function showModal(personaje) {
    setPersonaje(personaje);
    setOpenModal(true);
  }

  // paginacion
  function change(numPag) {
    const newApi = `https://rickandmortyapi.com/api/character?page=${numPag}`;
    setNumPage(numPag);
    setApi(newApi);
  }

  // guardar en local
  function guardarLocalUrl(data) {
    const Api2 = [...Apis, data];
    setApis(Api2);
  }

  function guardarLocalData(newData) {
    const newDatas = [...dataLocal, newData];
    setData(newDatas);
  }

  // no se renderiza hasta que haya characters
  if (loading || !data) {
    return (
      <>
        <h1 className={styles.characters}>All characters</h1>
        <OptionFilter />
        <div className={styles.cardGrid}>
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
        </div>
      </>
    );
  }

  if (error) {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Error!",
      text: "No tienes internet o acceso a esta api.",
      icon: "error",
    });
  }

  const { results: characters } = data;

  return (
    <section>
      <CardList
        characters={characters}
        showModal={showModal}
        searchedWord={searchedWord}
      />

      {personaje && (
        <Modal
          open={openModal}
          personaje={personaje}
          onClose={() => setOpenModal(false)}
        />
      )}
      {searchedWord === "" && (
        <Pagination numPage={numPage} change={change} maxPages={maxPages} />
      )}
    </section>
  );
};

export default Characters;
