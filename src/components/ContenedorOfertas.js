import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tarjeta from './Tarjeta';


export const ContenedorOfertas = () => {
  return (
    <>
    <Grid component="h1" align="center">Ultimas <span>ofertas</span></Grid>
    <Container>
    <Grid container spacing={5} alignItems="flex-end" align="center">
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
    </Grid>
    </Container>
    
    </>
  )
}

export default ContenedorOfertas;