import { Container, Grid } from '@mui/material';
import { React, useEffect, useContext } from 'react'
import Tarjeta from './Componente/Ofertas/Tarjeta';
import { CarritoContext } from './Componente/Carrito/context/CarritoProvider';


const PaginaInstrumentos = () => {

    const { products, actualizarStado, agregarAlCarrito } = useContext(CarritoContext)

    useEffect(() => {
        actualizarStado();
    }, [])


    return (
        <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Grid container spacing={3} align="center">
                {
                    products.map((producto) =>
                        <Grid item xs={12} md={6} lg={3} key={producto.id}>
                            <Tarjeta
                                offer={producto}
                                url="productos"
                                agregarAlCarrito={agregarAlCarrito} />
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    )
}

export default PaginaInstrumentos