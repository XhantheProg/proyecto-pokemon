import "./card.css";
import { Card } from "./card.jsx";
import { Buscador } from "./buscador.jsx";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import { Pagination } from "./pagination.jsx";
import { Modal } from "./Modal.jsx";

export const PokeInicio = () => {
  const { darkmode, toggleTheme } = useContext(ThemeContext);
  const [pokemon, setPokemon] = useState([]);
  const [busqueda, setBusqueda] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1); // currentPage es el número de página actual, y setCurrentPage es la función para actualizarlo. 
  // Empieza en 1 porque queremos mostrar la primera página al cargar.
  const handleBusqueda = (valor) => {
    setBusqueda(valor);
    setCurrentPage(1); // vuelve a la página 1 al buscar
  };
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const  [pokemons, setPokemons] = useState([]);  
  const [modalAbierto, setModalAbierto] = useState(false);
  const pokemonPerPage = 12;

  useEffect(() => {
  const obtenerPokemones = async () => {
    try {
      const respuesta = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1500"
      );
      const data = await respuesta.json();
      setPokemon(data.results); // 👈 solo guarda [{name, url}, {name, url}...]

    } catch (error) {
      console.error("Error al obtener pokemon:", error);
    }
  };

  obtenerPokemones();
}, []);

  const pokemonFiltrados = pokemon.filter((pokeman) =>
    pokeman.name.toLowerCase().includes(busqueda.toLowerCase()),
  );

  const lastIndex = currentPage * pokemonPerPage;
  const firstIndex = lastIndex - pokemonPerPage;
  const currentPokemon = pokemonFiltrados.slice(firstIndex, lastIndex);

  const abrirModal = (pokeman) => {
    console.log("pokeman recibido:", pokeman);
    setSelectedPokemon(pokeman);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setSelectedPokemon(null);
    setModalAbierto(false);
  };

  

  return (
    <>
      <header className="bg-red-600 px-6 py-4 flex items-center justify-between">
        {/* Lado izquierdo — pokébola + título */}
        <div className="flex items-center gap-3">
          {/* Pokébola simple con divs */}
          <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-red-600"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full border-2 border-gray-800 z-10"></div>
          </div>
          <h1 className="text-white text-2xl font-medium tracking-wide">
            Pokédex
          </h1>
        </div>

        {/* Lado derecho — botón modo */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 bg-white/20 hover:bg-black/60 text-white text-sm px-4 py-1.5 rounded-full transition duration-200"
        >
          {darkmode ? "☀ Modo Claro" : "☾ Modo Oscuro"}
        </button>
      </header>
      <div
        className={`min-h-screen ${darkmode ? "bg-[#1a1a2e]" : "bg-gray-100"}`}
      >
        <div className="p-6">
          <Buscador busqueda={busqueda} setBusqueda={handleBusqueda} />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentPokemon.map((pokeman, index) => (
              <Card
                key={`${pokeman.name}-${index}`}
                name={pokeman.name}
                url={pokeman.url}  
                price={pokeman.base_experience}
                onSelect={abrirModal}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPokemon={pokemonFiltrados.length}
            pokemonPerPage={pokemonPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      {modalAbierto && (
        <Modal pokemon={selectedPokemon} onClose={cerrarModal} /> //on close es la función que cierra el modal, y pokemon es el pokémon seleccionado para mostrar en el modal
      )}
    </>
  );
};
