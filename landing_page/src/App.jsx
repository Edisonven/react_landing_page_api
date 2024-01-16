import "./App.css";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";
import PaginatedList from "./components/Pagination";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  // estados declarados para el endpoint, seteo de personajes desde el endpoint, filtrado de personajes,  resultado del filtrado de personajes, paginas del paginado y pagina actual del paginado

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const personajes = `https://rickandmortyapi.com/api/character?page=${currentPage}`;
  const [personaje, setPersonaje] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [error, setError] = useState(null);
  const [resultFiltro, setResultFiltro] = useState([]);
  return (
    //Landing page que muestra los componentes importados y sus estilos
    <div>
      {/* Condicional que evalua si existe algún error con el llamado a la API y muestra un código de error 404*/}
      {!error ? (
        <div className="container">
          <img
            className="container__fondo"
            src="./src/assets/imgs/fondo_2_copia.jpeg"
            alt=""
          />
          <header className="header">
            <img
              className="header__img"
              src="./src/assets/imgs/ramlogo.png"
              alt=""
            />
            <h1 className="header__title">API INFO</h1>
          </header>
          {/* Componente Buscador y sus porps */}
          <Buscador
            setFiltro={setFiltro}
            filtro={filtro}
            setResultFiltro={setResultFiltro}
            personaje={personaje}
          ></Buscador>
          <section className="section">
            {/*Componente MiApi y sus props */}
            <MiApi
              setPersonaje={setPersonaje}
              personajes={personajes}
              setError={setError}
              resultFiltro={resultFiltro}
              setTotalPages={setTotalPages}
            ></MiApi>
          </section>
        </div>
      ) : (
        //Error mostrado en pantalla cuando ocurre el error de llamado a la API
        <div className="error__container">
          <h1 className="error__message">
            Parece que lo que tratas de encontrar se fue a otra dimensión :(
          </h1>
        </div>
      )}
      <PaginatedList
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></PaginatedList>
      <footer className="footer">
        <h5 className="footer__title">
          Aplicación construida para mostrar los datos de personajes de la serie
          animada llamada Rick and Morty
        </h5>
        <img className="footer__img" src="./src/assets/imgs/logo.png" alt="" />
      </footer>
    </div>
  );
}

export default App;
