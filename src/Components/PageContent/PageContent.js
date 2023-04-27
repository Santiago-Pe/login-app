import React from "react"
import './PageContent.css'
export default function PageComponent ({children}) {
   
    return (<div className='page-content'> {children} </div>)
}