import React from "react";
import { Box, Grid } from "@mui/material";
import "./Nav.css";
import Logo from "../../Imagenes/Logo.png"

function LogoyMarca() {
  return (
    <Grid container>
      <Grid>
       <img src={Logo} alt="Logo" className="Marca"/>
        <Box className="NombreMarca">
          <h1>
            <b>Sound On</b>
          </h1>
        </Box>
      </Grid>
    </Grid>
  );
}
export default LogoyMarca;
