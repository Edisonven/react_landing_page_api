import { Pagination } from "react-bootstrap";

const PaginatedList = ({ totalPages, currentPage, setCurrentPage }) => {
  //Función que cambia las paginas al presionar los botones de navegación del paginado. (se asigna el número de página en el llamado)
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //Función que se encarga de mostrar los botones del paginado limitado a 6 botones y se va actualizando en la navegación
  const renderPaginationItems = () => {
    //arreglo que almacena los botones del paginado
    const items = [];
    //Máximo de botones mostrados a la vez
    const maxButtons = 6;
    //Mitad de botones maximos de la cantidad total(se actualiza en la navegación dinamica por página)
    const halfButtons = Math.floor(maxButtons / 2);
    let startPage = Math.max(1, currentPage - halfButtons);
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);
    //Condicional que evalúa la mitad y el máximo de botones para ir actualizando la lista a medida que vamos navegando por las paginas
    if (totalPages > maxButtons) {
      if (currentPage <= halfButtons) {
        endPage = maxButtons;
      } else if (currentPage >= totalPages - halfButtons) {
        startPage = totalPages - maxButtons + 1;
      }
    }
    //Ciclo que recorre las paginas y crea un item de paginado por cada recorrido
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <Pagination.Item
          className="pagination__item"
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <div className="pagination__container">
      {/* Renderizado de componente paginado desde bootstrap */}
      <Pagination className="pagination__items">
        {/* Se asigna la primera página en el llamado a la función al hacer click*/}
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() =>
            //Se llama a la función cuando el usuario hace click en un item del paginado
            handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
          }
        />
        {/*Llamado a la función que renderiza el paginado */}
        {renderPaginationItems()}

        <Pagination.Next
          onClick={() =>
            handlePageChange(
              currentPage < totalPages ? currentPage + 1 : totalPages
            )
          }
        />
        {/* Se asigna la última página en el llamado a la función al hacer click*/}
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </div>
  );
};

export default PaginatedList;
