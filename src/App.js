import React from "react";
import "./App.css";
import { CssBaseline } from "@material-ui/core";
import Rutas from "./Componente/Router/Rutas";
function App() {
  return (
    <div className="DivP">
      <CssBaseline />
      <Rutas />
    </div>    
  );
}

export default App;
