/* ------------ Dependecies ------------*/
import React from "react";
import Form from "./Components/Form/Form";
import PageContent from './Components/PageContent/PageContent'
/* ------------ Child Components ------------*/
import Navbar from "./Components/Navbar/Navbar";
/* ------------Context ------------*/
import { ThemeProvider } from "./Context/ThemeContex";
import { LanguageProvider } from "./Context/LanguageContext";
function App() {

  /* ------------Render ------------*/
  return (

    
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
              <Navbar />
              <Form/>
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>


  );
}

export default App;
