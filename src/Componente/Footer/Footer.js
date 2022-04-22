import React from "react";
import { Box, Grid } from "@mui/material";
import Logo from "../../Imagenes/Logo.png";
import { makeStyles } from '@material-ui/core';
import Pie from "../../Imagenes/Pie.png";

const useStyle = makeStyles({
  PiePagina: {
    backgroundImage: "url(" + Pie + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#FF2E15',
    fontSize: '20px',
    opacity: '80%'


  },
  h3: {
    boxSizing: 'border-box ',
    padding: '0',
    margin: '0',
    fontSize: '20px'
  },
  li: {
    fontSize: '15px'
  },
  NombreMarca: {
    boxSizing: 'border-box',
    padding: '0',
    margin: '0',
    paddingLeft: '10px',
    marginTop: '90px',
    color: '#503BD9',
  },
  Marca: {
    width: '72px',
    height: '72px',
    backgroundRepeat: 'no-repeat',
    marginLeft: '50px',
    marginTop: '20px',
    position: 'absolute'
  }
})

function Footer() {

  const classes = useStyle();

  return (
    <footer className={classes.PiePagina} src={Pie} alt="Pie de Pagina" >
      <Box px={{ xs: 1, sm: 5 }}
        py={{ xs: 3, sm: 22.5 }}>
        <Grid container spacing={3}>
          <Grid item sm xs="auto">
            <img src={Logo} alt="Logo" className={classes.Marca} />
            <Box className={classes.NombreMarca}>
              <h1>Sound On</h1>
            </Box>
          </Grid>
          <Grid item sm xs={6}>
            <Box>
              <h3 url="/PaginaInstrumentos">Guitarras</h3>
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
              <h3 url="/PaginaInstrumentos">Baterias</h3>
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
              <h3 url="/PaginaInstrumentos" >Violines</h3>
              <ul>
                <li>Violín Barroco</li>
                <li>Violín Acústico</li>
                <li>Violín Eléctrico</li>
              </ul>
            </Box>
          </Grid>
          <Grid item sm xs={6}>
            <Box>
              <h3 url="/PaginaInstrumentos">Piano/Teclado</h3>
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
              <h3 url="/PaginaInstrumentos"> Parlantes</h3>
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
              <h3 url="/PaginaInstrumentos">Microfonos/Auriculares</h3>
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
