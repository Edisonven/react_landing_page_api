import { useEffect } from "react";

const MiApi = ({ setPersonaje, personajes, setError, resultFiltro }) => {
  //Función que hace el llamado al endpoint de la API
  const getData = async () => {
    try {
      const respuesta = await fetch(personajes);
      const data = await respuesta.json();
      setPersonaje(data.results);
    } catch (error) {
      setError(error);
    }
  };

  //Efecto que se encarga de mostrar el llamado a la API en el momento que se carga la página (Montaje)
  useEffect(() => {
    getData();
  }, []);

  return (
    //Contenedor de las tarjetas mostradas en pantalla luego de ser mapeadas desde el endpoint (estado seteado)
    <div className="card__container">
      {/*Condicional que evalúa si existe el personaje buscado o no para mostrar el personaje o un mensaje del error */}
      {resultFiltro.length > 0 ? (
        //Mapeo del estado seteado con el endpoint de personajes
        [
          ...resultFiltro
            .map((character) => (
              <div className="card__body" key={character.id}>
                <img className="card__img" src={character.image} alt="" />
                <h2 className="card__name">{character.name}</h2>
                {/*Condicional que muestra una propiedad distinta y un ícono según el contenido de dicha propiedad */}
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
            //Método que muestra los resultados del mapeo en reversa al orden original
            .reverse(),
        ]
      ) : (
        //Mensaje que se muestra al no encontrar coincidencias en la búsqueda de personajes
        <h2 className="noCharacter">
          Este personaje no se encuentra en ningún universo, Prueba a buscar
          otra vez!
        </h2>
      )}
    </div>
  );
};

export default MiApi;
