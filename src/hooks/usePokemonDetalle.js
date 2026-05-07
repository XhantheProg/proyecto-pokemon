// este archivo es un custom hook para obtener el detalle de un pokemon a partir de su URL
import { useState, useEffect } from "react";

export const usePokemonDetalle = (url) => {
  const [detalle, setDetalle] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchDetalle = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        // setDetalle(data);
        if (data.sprites?.front_default) {
            setDetalle(data);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setCargando(false);
      }
    };
    fetchDetalle();
  }, [url]);

  return { detalle, cargando };
};