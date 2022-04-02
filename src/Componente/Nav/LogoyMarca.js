import React from "react";
import { Box, Grid } from "@mui/material";
import "./Nav.css";

function LogoyMarca() {
  return (
    <Grid container>
      <Grid>
        <Box className="Marca"></Box>
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
