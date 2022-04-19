import React from "react";
import { Box, Grid, Container } from "@mui/material";
import "./Footer.css";
import "../Nav/Nav.css";
import Logo from "../../Imagenes/Logo.png";




function Footer() {
  return (
    <footer className="PiePagina">
      <Box px={{ xs: 1, sm: 5 }}
        py={{ xs: 3, sm: 22.5 }}>
        <Grid container spacing={3}>
          <Grid item sm xs={12}>
            <img src={Logo} alt="Logo" className="Marca" />
            <Box className="NombreMarca">
              <h1>Sound On</h1>
            </Box>
          </Grid>
          <Grid item sm xs={6}>
            <Box>
              <h3>Guitarras</h3>
              <ul>
                <li>Eléctricas</li>
                <li>Criollas</li>
                <li>Acústicas</li>
                <li>Bajos</li>
              </ul>
            </Box>
          </Grid>
          <Grid item sm xs={6}>
            <Box>
              <h3>Baterias</h3>
              <ul>
                <li>Acústicas</li>
                <li>Eléctronicas</li>
                <li>Platillos</li>
                <li>Redoblantes</li>
                <li>Pedales</li>
                <li>Banquetas</li>
              </ul>
            </Box>
          </Grid>
          <Grid item sm xs={6}>
            <Box>
              <h3>Violines</h3>
              <ul>
                <li>Violín Barroco</li>
                <li>Violín Acústico</li>
                <li>Violín Eléctrico</li>
              </ul>
            </Box>
          </Grid>
          <Grid item sm xs={6}>
            <Box>
              <h3>Piano/Teclado</h3>
              <ul>
                <li>Teclado Eléctrico</li>
                <li>Órgano</li>
                <li>Pianos Digitales</li>
                <li>Sintetizadores</li>
                <li>Controladores Midi</li>
              </ul>
            </Box>
          </Grid>
          <Grid item sm xs={6}>
            <Box>
              <h3>Parlantes</h3>
              <ul>
                <li>De Pie</li>
                <li>De Estanterías</li>
                <li>Surround</li>
                <li>Subwoofers</li>
                <li>Autoamplificaadores</li>
              </ul>
            </Box>
          </Grid>
          <Grid item sm xs={6}>
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
    </footer>
  );
}
export default Footer;
