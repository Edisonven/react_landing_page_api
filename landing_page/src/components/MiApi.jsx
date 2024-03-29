import { useEffect } from "react";

const MiApi = ({
  setPersonaje,
  personajes,
  setError,
  resultFiltro,
  setTotalPages,
}) => {
  // Efecto que ejecuta la función getData al detectar algún cambio en ella o en su dependecia
  useEffect(() => {
    //Función que hace el llamado al endpoint de la API
    const getData = async () => {
      try {
        const respuesta = await fetch(personajes);
        const data = await respuesta.json();
        setPersonaje(data.results);
        setTotalPages(data.info.pages);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, [personajes]);

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
                    <p className="card__property">Estado:</p>
                    <img src="assets/imgs/status1.svg" alt="" />
                    <p>{character.status}</p>
                  </div>
                ) : character.status === "Dead" ? (
                  <div className="card__status">
                    <p className="card__property">Estado:</p>
                    <img src="assets/imgs/status2.svg" alt="" />
                    <p>{character.status}</p>
                  </div>
                ) : (
                  <div className="card__status">
                    <p className="card__property">Estado:</p>
                    <img src="assets/imgs/status3.svg" alt="" />
                    <p>
                      {/* Metodo que toma la primera letra de la propiedad "status" y la convierte a mayuscula, luego se concatena con el resto de la cadena*/}
                      {character.status.charAt(0).toUpperCase() +
                        character.status.slice(1)}
                    </p>
                  </div>
                )}
                <div className="card__status">
                  <p className="card__property">Género:</p>
                  <p>
                    {character.gender.charAt(0).toUpperCase() +
                      character.gender.slice(1)}
                  </p>
                </div>
                <div className="card__status">
                  <p className="card__property">Especie:</p>
                  <p>
                    {character.species.charAt(0).toUpperCase() +
                      character.species.slice(1)}
                  </p>
                </div>
              </div>
            ))
            //Método que muestra los resultados del mapeo en reversa al orden original
            .reverse(),
        ]
      ) : (
        //Mensaje que se muestra al no encontrar coincidencias en la búsqueda de personajes
        <h2 className="noCharacter">
          Este personaje no se encuentra en ningún universo. !Prueba a buscar
          otra vez!
        </h2>
      )}
    </div>
  );
};

export default MiApi;
