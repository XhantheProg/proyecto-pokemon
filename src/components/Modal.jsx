import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Modal = ({ pokemon, onClose }) => {
  const { darkmode } = useContext(ThemeContext); // 👈 agregá esto

  if (!pokemon) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className={`rounded-2xl p-6 w-80 shadow-xl relative animate-[fadeIn_0.2s_ease-out]
          ${darkmode
            ? "bg-[#16213e] border border-[#0f3460]"  // modo oscuro
            : "bg-white border border-gray-200"         // modo claro
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-2 right-3 text-xl font-bold
            ${darkmode ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-gray-800"}`}
        >
          ✕
        </button>

        <img src={pokemon.sprites?.front_default} alt={pokemon.name} className="h-32 mx-auto" />

        <h2 className={`text-center text-xl font-medium capitalize mt-2
          ${darkmode ? "text-white" : "text-gray-800"}`}>
          {pokemon.name}
        </h2>

        <div className={`mt-4 space-y-2 text-sm ${darkmode ? "text-gray-400" : "text-gray-500"}`}>
          <p><span className={`font-medium ${darkmode ? "text-white" : "text-gray-800"}`}>ID:</span> #{pokemon.id}</p>
          <p><span className={`font-medium ${darkmode ? "text-white" : "text-gray-800"}`}>Altura:</span> {pokemon.height / 10} m</p>
          <p><span className={`font-medium ${darkmode ? "text-white" : "text-gray-800"}`}>Peso:</span> {pokemon.weight / 10} kg</p>
          <p><span className={`font-medium ${darkmode ? "text-white" : "text-gray-800"}`}>Exp base:</span> {pokemon.base_experience}</p>
          <p><span className={`font-medium ${darkmode ? "text-white" : "text-gray-800"}`}>Tipos:</span> {pokemon.types.map((t) => t.type.name).join(", ")}</p>
          <p><span className={`font-medium ${darkmode ? "text-white" : "text-gray-800"}`}>Habilidades:</span> {pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>
        </div>
      </div>
    </div>
  );
};