import React from "react";
import { Button, Box, Grid } from "@mui/material";
import "./Banner6.css";

function Banner6() {
  return (
    <div className="DivBanner">
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
          <Box className="Speakers"></Box>
          <Box>
            <Button variant="contained" color="success" to="/history">
              Conozca mas sobre Sound On
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Banner6;
