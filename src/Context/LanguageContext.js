/* ------------ Dependecies ------------*/
import React, {createContext, useState} from "react";


/* ------------ Language Context ------------*/

export const  LanguageContext = createContext();

export const  LanguageProvider = (props) => {
    const [language ,setLanguage] = useState('english');

    const toggleLanguage = (e) => {
        setLanguage(e.target.value)
    }

    return(
        <LanguageContext.Provider value={{language, toggleLanguage}}> 
            {props.children}
        </LanguageContext.Provider>
    )
}

