import { useContext } from "react";  
import "./card.css";
import { ThemeContext } from "./ThemeContext";
import { usePokemonDetalle } from "../hooks/usePokemonDetalle";

export const Card = ({ name, url, onSelect }) => {
  const { darkmode } = useContext(ThemeContext);
  const { detalle, cargando } = usePokemonDetalle(url);
  

  // Skeleton mientras carga
  if (cargando) return (
    <div className={`rounded-2xl p-4 h-48 flex items-center justify-center animate-pulse
      ${darkmode ? "bg-[#16213e]" : "bg-gray-200"}`}>
      <span className="text-gray-500 text-sm">Cargando...</span>
    </div>
  );

  // No renderiza si no tiene imagen
  if (!detalle?.sprites?.front_default) return null;

  return (
    <div
      onClick={() => {
  console.log("detalle al clickear:", detalle);
  onSelect(detalle);
}}
      className={`rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 cursor-pointer
        ${darkmode ? "bg-[#16213e] border border-[#0f3460]" : "bg-white border border-gray-200"}`}
    >
      <div className="h-40 flex items-center justify-center mb-4">
        <img
          src={detalle.sprites.front_default}
          alt={name}
          className="h-full object-contain"
        />
      </div>
      <h3 className={`text-sm font-semibold text-center capitalize
        ${darkmode ? "text-white" : "text-gray-800"}`}>
        {name}
      </h3>
    </div>
  );
};