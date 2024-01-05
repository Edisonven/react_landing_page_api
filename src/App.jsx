import "./App.css";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";
import { useState } from "react";
function App() {
  const [personaje, setPersonaje] = useState([]);
  const personajes = "https://rickandmortyapi.com/api/character?page=9";
  const [filtro, setFiltro] = useState("");

  return (
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
      <Buscador setFiltro={setFiltro} personaje={personaje}></Buscador>
      <section className="section">
        <MiApi
          personaje={personaje}
          setPersonaje={setPersonaje}
          personajes={personajes}
          filtro={filtro}
        ></MiApi>
      </section>
    </div>
  );
}

export default App;
