import React from "react";
import Rutas from "./Componente/Router/Rutas"
import { CssBaseline } from "@material-ui/core";
import CarritoProvider from "./Componente/Carrito/context/CarritoProvider";


function App() {
  return (
      <CarritoProvider>
        <CssBaseline />
        <Rutas />
      </CarritoProvider>
  );
}

export default App;