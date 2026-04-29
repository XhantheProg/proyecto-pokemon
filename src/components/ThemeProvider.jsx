import { useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

export const ThemeProvider = ({ children }) => { // children es una prop especial que representa los elementos hijos que se envuelven dentro del ThemeProvider. Esto permite que cualquier componente dentro de ThemeProvider tenga acceso al contexto del tema.

    const [darkmode, setDarkMode] = useState(false); //theme es el estado que guarda el tema actual, y setTheme es la función para actualizarlo. El valor inicial es "light".
    const toggleTheme = () => setDarkMode(!darkmode)

    return(
        <ThemeContext.Provider value={{darkmode, toggleTheme}}> //.provider es un componente que se utiliza para envolver los componentes que necesitan acceder al contexto. El valor que se pasa a value es el objeto que contiene el estado del tema y la función para cambiarlo.
            {children}
        </ThemeContext.Provider>

    )
}