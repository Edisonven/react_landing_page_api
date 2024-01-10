import Form from "react-bootstrap/Form";

const Buscador = ({ setFiltro, filtro }) => {
  const buscarPersonaje = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <>
      <Form.Control
        placeholder="Buscar personaje..."
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        className="buscador"
        value={filtro}
        onChange={buscarPersonaje}
      />
    </>
  );
};

export default Buscador;
