// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Navbar from "./componentes/Navbar";
import Section from "./componentes/Section";
import Footer from "./componentes/Footer"
// import {Footer} from "Footer.js";


//azucar sintactico: JSX => JS + HTML/XML

function App() {

  return (
    <>
      <Navbar/>
      <Section/>
      <Footer/>

    </>
    

    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //      hOLA A TODAS
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
