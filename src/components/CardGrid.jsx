import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import Nav from "./Navbar";
import Pagination from "./Pagination";
import Modal from "./Modal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useFetch from "../services/useFetch";

const CardGrid = () => {
  //paginacion
  const [numPage, setnumPag] = useState(1);
  const [maxPages, setmaxPages] = useState(42);

  //api
  const [Api, setAPi] = useState(
    `https://rickandmortyapi.com/api/character?page=${numPage}`
  );
  const [currentPage, setCurrentPage] = useState(Api);

  //modal
  const [openModal, setopenModals] = useState(false);
  const [personaje, setPersonaje] = useState();

  //guardar en local
  const [Apis, setApis] = useState(
    localStorage.getItem("urls") ? JSON.parse(localStorage.getItem("urls")) : []
  );

  const [dataLocal, setData] = useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );

  //buscador
  const [palabraBuscada, SetPalabraBuscada] = useState("");

  const { data, loading, error } = useFetch(Api);

  //cambia al cambiar la api
  useEffect(() => {
    if (data) {
      if (!Apis.includes(Api)) {
        guardarlocalUrl(Api);
        guardarlocalData(data);
        setmaxPages(data.info.pages);
      }
    }
  }, [currentPage, data]);

  function ShowModal(personaje) {
    setPersonaje(personaje);
    setopenModals(true);
  }

  //paginacion

  function change(numPag) {
    const newApi = `https://rickandmortyapi.com/api/character?page=${numPag}`;
    setnumPag(numPag);
    setAPi(newApi);
    setCurrentPage(newApi);
  }

  //guardar en local

  function guardarlocalUrl(data) {
    const Api2 = [...Apis, data];
    setApis(Api2);
    localStorage.setItem("urls", JSON.stringify(Api2));
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

  //no se renderiza hasta que haya characters
  if (loading || !data) {
    return (
      <>
        {" "}
        <Nav buscar={buscar} /> <h1>LOADING...</h1>
      </>
    );
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

  const { results: characters } = data;

  return (
    <section>
      <Nav buscar={buscar} />

      <CardList
        characters={characters}
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
        <Pagination numPage={numPage} change={change} maxPages={maxPages} />
      )}
    </section>
  );
};

export default CardGrid;
