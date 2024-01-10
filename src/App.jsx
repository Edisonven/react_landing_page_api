import "./App.css";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";
import { useState } from "react";
function App() {
  const personajes = "https://rickandmortyapi.com/api/character?page=3";
  const [personaje, setPersonaje] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [error, setError] = useState(null);
  let resultFiltro = [];
  return (
    <div>
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
          <Buscador setFiltro={setFiltro} filtro={filtro}></Buscador>
          <section className="section">
            <MiApi
              personaje={personaje}
              setPersonaje={setPersonaje}
              personajes={personajes}
              filtro={filtro}
              setError={setError}
              resultFiltro={resultFiltro}
            ></MiApi>
          </section>
        </div>
      ) : (
        <div className="error__container">
          <h1 className="error__message">
            Parece que lo que tratas de encontrar se fue a otra dimensión :(
          </h1>
        </div>
      )}
      <footer className="footer">
        <h3 className="footer__title">Aplicación construida para mostrar los datos de personajes de la serie animada llamada Rick and Morty</h3>
        <img className="footer__img" src="./src/assets/imgs/logo.png" alt="" />
      </footer>
    </div>
  );
}

export default App;
