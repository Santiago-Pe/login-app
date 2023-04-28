/* ------------ Dependecies ------------*/
import React, {createContext, useState} from "react";


/* ------------ Dark Mode Context ------------*/

export const  ThemeContext = createContext();

export const  ThemeProvider = (props) => {
    const [darkMode ,setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    return(
        <ThemeContext.Provider value={{darkMode, toggleTheme}}> 
            {props.children}
        </ThemeContext.Provider>
    )
}

