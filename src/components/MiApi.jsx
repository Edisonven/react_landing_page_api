import { useState } from "react";
import { useEffect } from "react";

const MiApi = () => {
  const [personaje, setPersonaje] = useState([]);
  const personajes = "https://rickandmortyapi.com/api/character?page=3";

  const getData = async () => {
    const respuesta = await fetch(personajes);
    const data = await respuesta.json();
    setPersonaje(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="card__container">
      {personaje.map((clave) => (
        <div className="card__body" key={clave.id}>
          <img className="card__img" src={clave.image} alt="" />
          <h2 className="card__name">{clave.name}</h2>
          {clave.status === "Alive" ? (
            <div className="card__status">
              <p>Estado:</p>
              <img src="./src/assets/imgs/status_1.svg" alt="" />
              <p>Alive</p>
            </div>
          ) : (
            <div className="card__status">
              <p>Estado:</p>
              <img src="./src/assets/imgs/status_2.svg" alt="" />
              <p>Dead</p>
            </div>
          )}
          <p>Género: {clave.gender}</p>
          <p>Especie: {clave.species}</p>
        </div>
      ))}
    </div>
  );
};

export default MiApi;
