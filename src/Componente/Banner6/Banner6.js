import React from "react";
import { Button, Box, Grid } from "@mui/material";
import "./Banner6.css";
import Speakers from "../../Imagenes/Speakers.png";

function Banner6() {
  return (
      <Grid container className="Slogan">
        <Grid
          className="Banner6"
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
          <img src={Speakers} alt="parlantes" className="Speakers" />
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
