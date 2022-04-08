import { Box, Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import ItemCarrito from './ItemCarrito'

const Carrito = () => {
  return (
    <>
      <Container>
        <ItemCarrito />
        <Button>Limpiar carrito</Button>
      </Container>


    </>
  )
}

export default Carrito