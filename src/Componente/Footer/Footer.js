import React from "react";
import { Box, Grid } from "@mui/material";
import "./Footer.css";
import "../Nav/Nav.css";


function Footer() {
  return (
    <Box component="footer" sx={{ py: 23,px: 1}} className="PiePagina">
      <Grid container spacing={7}>
        <Grid container item xs={2}>
          <Grid>
            <Box className="Marca"></Box>
            <Box className="NombreMarca">
              <h1>Sound On</h1>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs>
          <Box>
            <h3>Guitarras</h3>
            <ul>
              <li>Electricas</li>
              <li>Criollas</li>
              <li>Acusticas</li>
              <li>Bajos</li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs>
          <Box>  
            <h3>Baterias</h3>
            <ul>
              <li>Acusticas</li>
              <li>Electronicas</li>
              <li>Platillos</li>
              <li>Redoblantes</li>
              <li>Pedales</li>
              <li>Banquetas</li>
            </ul>
           </Box>
        </Grid>
        <Grid item xs>
          <Box>
          <h3>Violines</h3>
            <ul>
              <li>Violín Barroco</li>
              <li>Violín Acústico</li>
              <li>Violín Eléctrico</li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs>
          <Box>
          <h3>Piano/Teclado</h3>
            <ul>
              <li>Teclado Electrico</li>
              <li>Organo</li>
              <li>Pianos Digitales</li>
              <li>Sintetizadores</li>
              <li>Controladores Midi</li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs>
          <Box>
          <h3>Parlantes</h3>
            <ul>
              <li>De Pie</li>
              <li>De Estanterias</li>
              <li>Surround</li>
              <li>Subwoofers</li>
              <li>Autoamplificaadores</li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs>
          <Box>
          <h3>Microfonos/Auriculares</h3>
            <ul>
              <li>Microfonos Dinámicos</li>
              <li>Auriculares Inlambricos</li>
              <li>Auriculares Over-ear</li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Footer;
