import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
    const [darkmode, setDarkmode] = useState(false);
    const toggleTheme = () => setDarkmode(!darkmode);

    return (
        <ThemeContext.Provider value={{ darkmode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}