import React from "react";
import Nav from "./Componente/Nav/Nav.js";
import Banner6 from "./Componente/Banner6/Banner6.js";
import "./App.css"
import Footer from "./Componente/Footer/Footer";
import Imgytexto from "./Componente/ImgyTexto/Imgytexto.js";
import BannerExample from "./Componente/Carrousel/Carrousel.js";


function App() {
  return (
    <div className="DivP">
        <Nav/>
        <Banner6/>
        <Imgytexto/>
        <BannerExample/>
        <Footer/>
    </div> 
        
  );
}

export default App;
