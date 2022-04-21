import React from "react";
import { Box, Grid } from "@mui/material";
import Logo from "../../Imagenes/Logo.png"
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  NombreMarca: {
    boxSizing:'border-box',
    padding: '0',
    margin: '0',
    paddingLeft: '16px',
    marginTop: '90px',
    color: '#503BD9',
  },
    Marca: {
      width: '72px',
      height: '72px',
      backgroundRepeat: 'no-repeat',
      marginLeft: '50px',
      marginTop:'20px', 
      position: 'absolute'
    }
  })

function LogoyMarca() {
  const classes = useStyle();
  return (
    <Grid container>
      <Grid>
      <img src={Logo} alt="Logo" className={classes.Marca} />
        <Box className={classes.NombreMarca}>
          <h1>
            <b>Sound On</b>
          </h1>
        </Box>
      </Grid>
    </Grid>
  );
}
export default LogoyMarca;
