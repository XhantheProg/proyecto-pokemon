import "./card.css";
import { Card } from "./card.jsx";
import { Buscador } from "./buscador.jsx";
import { useEffect, useState } from "react";

export const PokeInicio = () => {
  const [busqueda, setBusqueda] = useState("");
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const obtenerPokemones = async () => {
      try {
        const respuesta = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20",
        );
        const data = await respuesta.json();

        // Para obtener la imagen, necesitas hacer fetch a cada URL individual
        const detalles = await Promise.all(
          data.results.map(async (poke) => {
            const res = await fetch(poke.url);
            const detalle = await res.json();
            return detalle; // incluye .sprites.front_default
          }),
        );

        setPokemon(detalles); // ahora cada item tiene imagen
      } catch (error) {
        console.error("Error al obtener pokemon:", error);
      }
    };

    obtenerPokemones();
  }, []);

  const pokemonFiltrados = pokemon.filter((pokeman) =>
    pokeman.name.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <>
      <div className="p-6">
        <h1 className="text-xl font-bold text-center mb-6">Pokédex</h1>
        <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pokemonFiltrados.map((pokeman) => (
            <Card
              key={pokeman.id}
              name={pokeman.name}
              sprites={pokeman.sprites}
              price={pokeman.base_experience}
            />
          ))}
        </div>
      </div>
    </>
  );
};
