import React from "react";
import Nav from "./Componente/Nav/Nav.js";
import Banner6 from "./Componente/Banner6/Banner6.js";
import "./App.css"
import Footer from "./Componente/Footer/Footer";
import Imgytexto from "./Componente/ImgyTexto/Imgytexto.js";
import BannerExample from "./Componente/Carrousel/Carrousel.js";
import { CssBaseline } from "@material-ui/core";
import Banner from "./Componente/BannerPrincipal/Banner";
import Alerta from "./Componente/Alerta/Alerta";
import Ventajas from "./components/Ventajas/Ventajas";

function App() {
  return (
    <div className="DivP">
      <CssBaseline />
      <Alerta/>
      <Nav />
      <Banner />
       <Ventajas/>
      <Banner6 />
      <Imgytexto />
      <BannerExample />
      <Footer />
     
    </div>

  );
}

export default App;
