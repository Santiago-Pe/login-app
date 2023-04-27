import React, {createContext, useState} from "react";

const  ThemeContext = createContext();

export const  ThemeProvider = (props) => {
    const [darkMode ,setDarkMode] = useState(true);

    return(
        <ThemeContext.Provider value={{...darkMode}}> 
            {props.children}
        </ThemeContext.Provider>
    )
}

