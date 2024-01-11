import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";

const Buscador = ({ setFiltro, filtro, setResultFiltro, personaje }) => {
  //Función dentro de un useEffect que setea luego de la renderización de app y muestra los resultados ingresados desde el input
  useEffect(() => {
    //condicional que evalúa si hay búsqueda ingresada en el input para mostrar los resultados. al no haber caracteres ingresados, muestra el arreglo original
    if (!filtro) {
      const originalResult = personaje;
      setResultFiltro(originalResult);
    } else {
      const newResult = personaje
        //Filtro aplicado al arreglo original
        .filter(
          (p) =>
            p.name.toLowerCase().includes(filtro.toLowerCase()) ||
            p.status.toLowerCase().includes(filtro.toLowerCase()) ||
            p.species.toLowerCase().includes(filtro.toLowerCase()) ||
            p.gender.toLowerCase().startsWith(filtro.toLowerCase())
        )
        //Método que ordena los resultados de la búsqueda en orden alfabetico
        .sort((a, b) => a.name.localeCompare(b.name));
      setResultFiltro(newResult);
    }
    //Dependecias que activan useEffect siempre que detecten un cambio en sus estados
  }, [filtro, personaje, setResultFiltro]);
  //Función quue se encarga de almacenar los valores ingresados en el input buscador
  const buscarPersonaje = (e) => {
    setFiltro(e.target.value);
  };

  return (
    //Input para buscar personajes
    <>
      <Form.Control
        placeholder="BUSCAR PERSONAJE..."
        type="text"
        className="buscador"
        value={filtro}
        onChange={buscarPersonaje}
      />
    </>
  );
};

export default Buscador;
