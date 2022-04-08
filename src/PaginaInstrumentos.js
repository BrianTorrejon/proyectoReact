import { Container, Grid } from '@mui/material';
import axios from 'axios';
import { React, useEffect, useState } from 'react'
import Tarjeta from './Componente/Ofertas/Tarjeta';

const PaginaInstrumentos = () => {

    const [lista, setLista] = useState([])

    const cargarConsulta = async () => {
        const consultaUrl = "http://localhost:3000/productos";
        const resConsulta = await axios.get(consultaUrl);
        const consulta = await resConsulta.data;
        setLista(consulta)
    }

    useEffect(() => {
        cargarConsulta();
    }, [])

    return (
        <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Grid container spacing={3} align="center">
                {
                    lista.map((producto) =>
                        <Grid item xs={12} md={6} lg={3} key={producto.id}>
                            <Tarjeta
                                offer={producto}
                                url="productos" />
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    )
}

export default PaginaInstrumentos