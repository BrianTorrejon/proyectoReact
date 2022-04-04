import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Card, CardActions, CardContent, Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    gridContainer: {
        height: "600px",
        "& .MuiTypography-root": {
            marginBottom: 20
        }
    },
    boton: {
        color: '#ffffff',
        backgroundColor: '#503BD9',
        width: '200px',
        height: '45px',
        fontSize: '14px',
        '&:hover': {
            backgroundColor: '#4230B3'
        }
    },

})

const Instrumento = () => {

    const classes = useStyle();

    let { id } = useParams();

    const [instrumento, setInstrumento] = useState({});

    const cargarInstrumento = async () => {

        const instrumentoUrl = "http://localhost:3000/ofertas/" + id;
        const resInstrumento = await axios.get(instrumentoUrl);
        let instrument = await resInstrumento.data;
        setInstrumento(instrument);
    };

    useEffect(() => {
        cargarInstrumento()
    }
        , [])

    return (
        <Container>
            <Grid container className={classes.gridContainer}>
                <Grid item md={8} xs={12} style={{
                    backgroundImage: "url(" + instrumento.urlImg + ")",
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    border: "1px solid #503BD9",
                    borderRadius: 10
                }} />
                <Grid item md={4} xs={12}>
                    <Card style={{ minHeight: "100%" }}>
                        <CardContent >
                            <Typography variant='h3' > {instrumento.marca} </Typography>
                            <Typography variant='h4'> {instrumento.nombre} </Typography>
                            <Typography variant='h5'> {instrumento.precio} <strike>{instrumento.precioAnterior}</strike>  </Typography>
                            <Typography> Stock  </Typography>
                            <CardActions>
                                <Button className={classes.boton}>Comprar</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Instrumento