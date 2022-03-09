import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tarjeta from './Tarjeta';


export const ContenedorOfertas = () => {
  return (
    <>
 <Container>
      <Grid component="h1" align="center">Ultimas <span>ofertas</span></Grid>
      
        <Grid container spacing={3} align="center">
          <Grid item xs={12} md={6} lg={3}>
            <Tarjeta />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Tarjeta />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Tarjeta />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Tarjeta />
          </Grid>
        </Grid>
        </Container>
        </>
  )
}

export default ContenedorOfertas;