import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Buscador = ({ busqueda, setBusqueda }) => {
  const { darkmode } = useContext(ThemeContext);

  return (
    <input
      type="text"
      placeholder="Buscar Pokémon..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      className={`p-3 rounded-2xl mb-4 w-full outline-none transition duration-200
        ${darkmode
          ? "bg-[#0f3460] text-white placeholder-gray-500 border border-[#1a1a2e]"
          : "bg-white text-gray-800 placeholder-gray-400 border border-gray-200"
        }`}
    />
  );
};