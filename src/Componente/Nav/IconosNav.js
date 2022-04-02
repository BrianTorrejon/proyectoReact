import React from "react";
import { Box, Grid } from "@mui/material";
import "./Nav.css";


function IconosNav() {
    return (
        <Grid container className="Herramientas" direction="row" justifyContent="flex-end">
        <Box className="Search"></Box>
        <Box className="Users"></Box>
        <Box className="Cart"></Box>
        </Grid>
          
    );
  }
  
  export default IconosNav;