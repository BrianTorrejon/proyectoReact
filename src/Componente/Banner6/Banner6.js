import React from "react";
import { Button, Box, Grid } from "@mui/material";
import Speakers from "../../Imagenes/Speakers.png";
import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles({
  speakers: {
   width: '96px',
   height:'96px'
   
  },
  banner6: {
    background:'#EBA907'
  },
  slogan: {
    height: '200px',
    width: '1512px'
  }
})
function Banner6() {

  const classes = useStyle();

  return (
      <Grid container className= {classes.slogan}>
        <Grid
          className= {classes.banner6}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <br></br>
          <Box>
            Conviertete en el sentimiento de tu barrio con nuestros
            Instrumentros
          </Box>
          <img src={Speakers} alt="parlantes" className={classes.speakers} />
          <Box>
            <Button variant="contained" color="success" to="/history">
              Conozca mas sobre Sound On
            </Button>
          </Box>
        </Grid>
      </Grid>

  );
}

export default Banner6;
