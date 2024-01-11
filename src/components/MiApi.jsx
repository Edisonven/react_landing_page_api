import { useEffect } from "react";

const MiApi = ({
  personaje,
  setPersonaje,
  personajes,
  filtro,
  setError,
  resultFiltro,
}) => {
  const getData = async () => {
    try {
      const respuesta = await fetch(personajes);
      const data = await respuesta.json();
      setPersonaje(data.results);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!filtro) {
    resultFiltro = personaje;
  } else {
    resultFiltro = personaje.filter(
      (p) =>
        p.name.toLowerCase().includes(filtro.toLowerCase()) ||
        p.status.toLowerCase().includes(filtro.toLowerCase()) ||
        p.species.toLowerCase().includes(filtro.toLowerCase()) ||
        p.gender.toLowerCase().startsWith(filtro.toLowerCase())
    );
  }
  return (
    <div className="card__container">
      {resultFiltro.map((clave) => (
        <div className="card__body" key={clave.id}>
          <img className="card__img" src={clave.image} alt="" />
          <h2 className="card__name">{clave.name}</h2>
          {clave.status === "Alive" ? (
            <div className="card__status">
              <p>Estado:</p>
              <img src="./src/assets/imgs/status_1.svg" alt="" />
              <p>Alive</p>
            </div>
          ) : clave.status === "Dead" ? (
            <div className="card__status">
              <p>Estado:</p>
              <img src="./src/assets/imgs/status_2.svg" alt="" />
              <p>Dead</p>
            </div>
          ) : (
            <div className="card__status">
              <p>Estado:</p>
              <img src="./src/assets/imgs/status_3.svg" alt="" />
              <p>Unknown</p>
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
