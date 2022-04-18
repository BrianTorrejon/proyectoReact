import React from "react";
import "./App.css"
import Rutas from "./Componente/Router/Rutas"
import { CssBaseline } from "@material-ui/core";
import CarritoProvider from "./Componente/Carrito/context/CarritoProvider";


function App() {
  return (
    <div className="DivP">
      <CarritoProvider>
        <CssBaseline />
        <Rutas />
      </CarritoProvider>
    </div>

  );
}

export default App;