import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import Nav from "./Navbar";
import Pagination from "./Pagination";
import Modal from "./Modal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CardGrid = () => {
  const API = "https://rickandmortyapi.com/api/character?page=1";

  const [currentPage, setCurrentPage] = useState(API);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [personajes, setPersonajes] = useState();
  const [numPag, setnumPag] = useState();
  const [openModal, setopenModals] = useState(false);
  const [personaje, setPersonaje] = useState();
  const [Apis, setApis] = useState(
    localStorage.getItem("urls") ? localStorage.getItem("urls") : []
  );

  const [dataLocal, setData] = useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );

  useEffect(() => {
    fetchApiData();
  }, [currentPage]);

  const fetchApiData = async () => {
    let data;
    setnumPag(recortarPage());
    if (!Apis.includes(currentPage)) {
      try {
        const response = await fetch(currentPage);
        if (response.ok) {
          data = await response.json();
          guardarlocalUrl(currentPage);
          guardarlocalData(data);
        } else {
          throw new Error(
            JSON.stringify({
              code: response.status,
              message: response.statusText,
            })
          );
        }
      } catch (error) {
        const MySwal = withReactContent(Swal);

        MySwal.fire({
          title: "Error!",
          text: "No tienes internet o acceso a esta api.",
          icon: "error",
        });
      }
    } else {
      data = dataLocal[recortarPage() - 1];
    }

    setNextPage(data.info.next);
    setPrevPage(data.info.prev);
    setPersonajes(data.results);
  };

  function ShowModal(personaje) {
    setPersonaje(personaje);
    setopenModals(true);
  }

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

  if (!personajes) {
    return null;
  }

  return (
    <section>
      <Nav />

      <CardList personajes={personajes} showModal={ShowModal} />
      {personaje && (
        <Modal
          open={openModal}
          personaje={personaje}
          onClose={() => setopenModals(false)}
        />
      )}
      <Pagination
        numPag={numPag}
        changePrevious={changePrevious}
        changeNext={changeNext}
      />
    </section>
  );
};

export default CardGrid;
