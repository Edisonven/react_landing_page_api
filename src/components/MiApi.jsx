import { useEffect } from "react";

const MiApi = ({ setPersonaje, personajes, setError, resultFiltro }) => {
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

  return (
    <div className="card__container">
      {resultFiltro.length > 0 ? (
        resultFiltro.map((character) => (
          <div className="card__body" key={character.id}>
            <img className="card__img" src={character.image} alt="" />
            <h2 className="card__name">{character.name}</h2>
            {character.status === "Alive" ? (
              <div className="card__status">
                <p>Estado:</p>
                <img src="./src/assets/imgs/status_1.svg" alt="" />
                <p>Alive</p>
              </div>
            ) : character.status === "Dead" ? (
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
            <p>Género: {character.gender}</p>
            <p>Especie: {character.species}</p>
          </div>
        ))
      ) : (
        <h2 className="noCharacter">
          Este personaje no se encuentra en ningún universo, Prueba a buscar
          otra vez!
        </h2>
      )}
    </div>
  );
};

export default MiApi;
