import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";

const Buscador = ({ setFiltro, filtro, setResultFiltro, personaje }) => {
  useEffect(() => {
    if (!filtro) {
      const originalResult = personaje;
      setResultFiltro(originalResult);
    } else {
      const newResult = [
        ...personaje
          .filter(
            (p) =>
              p.name.toLowerCase().includes(filtro.toLowerCase()) ||
              p.status.toLowerCase().includes(filtro.toLowerCase()) ||
              p.species.toLowerCase().includes(filtro.toLowerCase()) ||
              p.gender.toLowerCase().startsWith(filtro.toLowerCase())
          )
          .sort((a, b) => a.name.localeCompare(b.name)),
      ];
      setResultFiltro(newResult);
    }
  }, [filtro, personaje, setResultFiltro]);

  const buscarPersonaje = (e) => {
    setFiltro(e.target.value);
  };

  return (
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
