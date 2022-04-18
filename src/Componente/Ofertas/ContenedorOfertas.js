import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tarjeta from './Tarjeta';
import { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { CarritoContext } from '../Carrito/context/CarritoProvider';

const useStyle = makeStyles({
  span: {
    color: '#503BD9'
  }
})

export const ContenedorOfertas = () => {

  const { products, actualizarStado, agregarAlCarrito } = useContext(CarritoContext)

  const classes = useStyle();


  useEffect(() => {
    actualizarStado()
  }
    , [])

  return (
    <>
      <Container>
        <Grid component="h1" align="center">Ultimas <span className={classes.span}>ofertas</span></Grid>
        <Grid container spacing={3} align="center">
          {
            products.map((oferta) =>
              oferta.oferta &&
              <Grid item xs={12} md={6} lg={3} key={oferta.id}>
                <Tarjeta
                  offer={oferta}
                  agregarAlCarrito={agregarAlCarrito}
                />
              </Grid>
            )
          }
        </Grid>
      </Container>
    </>
  )
}

export default ContenedorOfertas;