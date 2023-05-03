import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import Nav from "./Navbar";
import Pagination from "./Pagination";
import Modal from "./Modal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useFetch from "./useFetch";

const CardGrid = () => {
  //api
  const API = "https://rickandmortyapi.com/api/character?page=1";
  const [currentPage, setCurrentPage] = useState(API);

  //paginacion
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [numPag, setnumPag] = useState();

  //modal
  const [openModal, setopenModals] = useState(false);
  const [personaje, setPersonaje] = useState();

  //guardar en local
  const [Apis, setApis] = useState(
    localStorage.getItem("urls") ? localStorage.getItem("urls") : []
  );

  const [dataLocal, setData] = useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );

  //buscador
  const [palabraBuscada, SetPalabraBuscada] = useState("");

  const { data, loading, error } = useFetch(currentPage);

  //cambia al cambiar la api
  useEffect(() => {
    if (data) {
      setNextPage(data.info.next);
      setPrevPage(data.info.prev);

      setnumPag(recortarPage());
      if (!Apis.includes(currentPage)) {
        guardarlocalUrl(currentPage);
        guardarlocalData(data);
      }
    }
  }, [data]);

  function ShowModal(personaje) {
    setPersonaje(personaje);
    setopenModals(true);
  }

  //paginacion
  function recortarPage() {
    return currentPage.slice(47);
  }

  function changePrevious() {
    setnumPag(recortarPage);
    setCurrentPage(prevPage);
  }
  function changeNext() {
    setnumPag(recortarPage);
    setPrevPage(currentPage);
    setCurrentPage(nextPage);
  }

  //guardar en local

  function guardarlocalUrl(data) {
    const Api = [...Apis, data];
    setApis(Api);
    localStorage.setItem("urls", Api);
  }
  function guardarlocalData(newData) {
    const newDatas = [...dataLocal, newData];
    setData(newDatas);
    localStorage.setItem("data", JSON.stringify(newDatas));
  }

  //buscador
  function buscar(palabra) {
    SetPalabraBuscada(palabra);
  }

  //no se renderiza hasta que haya personajes
  if (loading || !data) {
    return <h1>LOADING...</h1>;
  }

  if (error) {
    console.log(error);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Error!",
      text: "No tienes internet o acceso a esta api.",
      icon: "error",
    });
  }

  const { results: personajes } = data;

  return (
    <section>
      <Nav buscar={buscar} />

      <CardList
        personajes={personajes}
        showModal={ShowModal}
        palabraBuscada={palabraBuscada}
      />

      {personaje && (
        <Modal
          open={openModal}
          personaje={personaje}
          onClose={() => setopenModals(false)}
        />
      )}
      {palabraBuscada === "" && (
        <Pagination
          numPag={numPag}
          changePrevious={changePrevious}
          changeNext={changeNext}
        />
      )}
    </section>
  );
};

export default CardGrid;
