export const Pagination = ({ currentPage, totalPokemon, pokemonPerPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalPokemon / pokemonPerPage);

  // Genera qué números mostrar — máximo 5 visibles
  const getPages = () => {
    if (totalPages <= 5) {
      // Si hay 5 o menos páginas, mostrarlas todas
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      // Al inicio: [1, 2, 3, 4, 5, '...', último]
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      // Al final: [1, '...', últimos 5]
      return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    // En el medio: [1, '...', anterior, actual, siguiente, '...', último]
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  return (
    <footer className="sticky bottom-0 bg-inherit py-3 flex gap-2 justify-center flex-wrap">
      {/* Botón anterior */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-lg border bg-white text-gray-700 disabled:opacity-30 hover:bg-gray-100 transition"
      >
        ←
      </button>

      {/* Números */}
      {getPages().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-1 text-gray-400">...</span>
        ) : (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-lg border transition
              ${currentPage === page
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            {page}
          </button>
        )
      )}

      {/* Botón siguiente */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-lg border bg-white text-gray-700 disabled:opacity-30 hover:bg-gray-100 transition"
      >
        →
      </button>
    </footer>
  );
};