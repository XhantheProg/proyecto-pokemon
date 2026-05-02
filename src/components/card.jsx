import { useContext } from "react";
import "./card.css";
import { ThemeContext } from "./ThemeContext";

export const Card = ({ name, sprites, price, onSelect }) => {
  const { darkmode } = useContext(ThemeContext); // 👈 minúscula, igual que en el Provider

  return (
    <div
      onClick={onSelect}
      className={`rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 cursor-pointer
        ${darkmode ? "bg-[#16213e] border border-[#0f3460]" : "bg-white border border-gray-200"}`}
    >
      <div className="h-40 flex items-center justify-center mb-4">
        <img
          src={sprites?.front_default}
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