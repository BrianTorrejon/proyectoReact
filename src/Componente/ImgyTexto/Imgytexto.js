import React from "react";
import { Box, Grid, Button, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import banda from "../../Imagenes/banda.jpg";
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
banda: {
  height: '450px',
  width: '720px',
  backgroundRepeat: 'no-repeat',
  marginLeft: '85px',
  marginTop: '10px',
  marginBottom: '10px'
 },
h2: {
  fontSize: '25px'
},
texto: {
  fontSize: '20px',
},
info: {
  marginLeft: '350px'
},
buy: {
  marginTop: '450px',
  marginLeft: '-150px'
}
})


function Imgytexto() {

  const classes = useStyle();

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  return (
    <Grid container spacing={3} columns={16} >
      <Grid item xs={5}>
        <img src={banda} alt="banda tocando" className={classes.banda} />
      </Grid>
      <Grid item xs={10}>
        <Box className={classes.info}>
          <h2>El Arce</h2>
          <Box className={classes.texto}>
            Es la madera blanda que más se usa en la fabricación de instrumentos
            musicales . Principalmente se emplea en instrumentos de cuerda
            gracias a sus cualidades sonoras. La madera de arce permite generar
            sonidos brillantes y llenos de tonos transparentes medios-altos.
          </Box>
          <h2>El Palosanto </h2>
          <Box className={classes.texto}>
            Es una madera más desconocida en el sector. Esta madera se caracteriza por ser
            muy densa, aceitosa y olorosa. También es resistente a la humedad y
            al ataque de insectos y hongos. Los instrumentos musicales
            fabricados con este material tienen fama de ser excelentes en sonido
            y calidad.
          </Box>
        </Box>
      </Grid>
      <Box className={classes.buy}>
        <ColorButton variant="contained">Comprar Ahora</ColorButton>
      </Box>
    </Grid>
  );
}
export default Imgytexto;
