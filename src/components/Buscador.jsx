const Buscador = ({ setFiltro, personaje }) => {
  const buscarPersonaje = (event) => {
    if (event.target.value !== "") {
      const resultados = [...personaje].filter((p) =>
        Object.values(p).some((valor) =>
          String(valor).toLowerCase().startsWith(event.target.value.toLowerCase())
        )
      );

      setFiltro(resultados);
    } else {
      setFiltro("");
    }
  };
  return (
    <>
      <input
        className="buscador"
        placeholder="Buscar Personaje..."
        onChange={buscarPersonaje}
      />
    </>
  );
};

export default Buscador;
