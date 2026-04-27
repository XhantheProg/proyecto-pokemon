// Buscador.jsx
export const Buscador = ({ busqueda, setBusqueda }) => {
  return (
    <input
      type="text"
      placeholder="Buscar Pokémon..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      className="border p-2 rounded mb-4 w-full"
    />
  );
};   