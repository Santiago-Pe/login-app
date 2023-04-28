/* ------------ Dependecies ------------*/
import React from "react";
import Form from "./Components/Form/Form";
import PageContent from './Components/PageContent/PageContent'
/* ------------ Child Components ------------*/
import Navbar from "./Components/Navbar/Navbar";
import { ThemeProvider } from "./Context/ThemeContex";
/* ------------Context ------------*/
function App() {

  /* ------------Render ------------*/
  return (

    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Form/>
      </PageContent>
    </ThemeProvider>

  );
}

export default App;
