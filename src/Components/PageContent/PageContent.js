/* ------------ Dependeces ------------*/
import React, {useContext} from "react"
/* ------------ Stykes ------------*/
import './PageContent.css'
/* ------------ Context ------------*/
import { ThemeContext } from "../../Context/ThemeContex";

/* ------------ Component ------------*/

export default function PageComponent ({children}) {
    const { darkMode } = useContext(ThemeContext);
   
    return (<div className={`page-content ${darkMode ? 'bg-dark' : 'bg-light'}`}> {children} </div>)
}