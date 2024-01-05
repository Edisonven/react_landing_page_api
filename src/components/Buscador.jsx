const Buscador = ({ setFiltro, filtro }) => {
  const buscarPersonaje = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <>
      <input
        className="buscador"
        placeholder="Buscar Personaje..."
        value={filtro}
        onChange={buscarPersonaje}
      />
    </>
  );
};

export default Buscador;
