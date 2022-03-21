import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tarjeta from './Tarjeta';
import axios from 'axios';
import { useEffect, useState } from 'react';


export const ContenedorOfertas = () => {

  const [lista, setLista] = useState([]);

  const cargarOfertas = async () => {

    const ofertasUrl = "http://localhost:3000/ofertas";
    const resOfertas = await axios.get(ofertasUrl);
    let ofertas = resOfertas.data;
    setLista(ofertas);
  };


  useEffect(() => {
    cargarOfertas()
  }
    , [])


  return (
    <>
      <Container>
        <Grid component="h1" align="center">Ultimas <span>ofertas</span></Grid>
        <Grid container spacing={3} align="center">
          {
            lista.map((oferta) =>
              <Grid item xs={12} md={6} lg={3} key={oferta.id}>
                <Tarjeta
                  offer={oferta} />
              </Grid>
            )
          }
        </Grid>
      </Container>
    </>
  )
}

export default ContenedorOfertas;