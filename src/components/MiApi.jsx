import { useState } from "react";
import { useEffect } from "react";

const MiApi = () => {
    
  const [personaje, setPersonaje] = useState([]);
  const personajes = "https://rickandmortyapi.com/api/character";

  const getData = async () => {
    const respuesta = await fetch(personajes);
    const data = await respuesta.json();
    setPersonaje(data.results);
  };

  //  console.log(personaje.map((e)=> e.name));

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {personaje.map((e) => <p>{e.name}</p> )}
    </div>
  );
};

export default MiApi;
