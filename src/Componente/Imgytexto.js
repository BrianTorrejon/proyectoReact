import React from "react";
import { Box, Grid, Button, styled } from "@mui/material";
import "./imgytexto.css";
import { purple } from "@mui/material/colors";

function Imgytexto() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  return (
    <Grid container spacing={3} columns={16}>
      <Grid item xs={5}>
        <Box className="Banda"></Box>
      </Grid>
      <Grid item xs={10}>
        <Box className="Info">
          <h2>El Arce</h2>
          <Box className="Texto">
            Es la madera blanda que más se usa en la fabricación de instrumentos
            musicales . Principalmente se emplea en instrumentos de cuerda
            gracias a sus cualidades sonoras. La madera de arce permite generar
            sonidos brillantes y llenos de tonos transparentes medios-altos.
          </Box>
          <h2>El Palosanto </h2>
          <Box className="Texto">
            Es una madera más desconocida. Esta madera se caracteriza por ser
            muy densa, aceitosa y olorosa. También es resistente a la humedad y
            al ataque de insectos y hongos. Los instrumentos musicales
            fabricados con este material tienen fama de ser excelentes en sonido
            y calidad.
          </Box>
        </Box>
      </Grid>
      <Box className="Buy">
        <ColorButton variant="contained">Comprar Ahora</ColorButton>
      </Box>
    </Grid>
  );
}
export default Imgytexto;
