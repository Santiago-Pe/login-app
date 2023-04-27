import React, {createContext, useState} from "react";

export const  ThemeContext = createContext();

export const  ThemeProvider = (props) => {
    const [darkMode ,setDarkMode] = useState(true);

    const handleMode = () => {
        setDarkMode(!darkMode)
    }

    return(
        <ThemeContext.Provider value={{darkMode, handleMode}}> 
            {props.children}
        </ThemeContext.Provider>
    )
}

