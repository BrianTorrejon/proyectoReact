import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Card, CardActions, CardContent, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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

    const [abrir, setAbrir] = useState(false)

    const handleAbrir = () => {
        setAbrir(true)
    }

    const handleCerrar = () => {
        setAbrir(false)
    }

    const handleAgregar = () => {
        handleCerrar();
        alert("El producto se agrego exitosamente");
    }

    const classes = useStyle();

    let { id, url } = useParams();

    const [instrumento, setInstrumento] = useState({});

    const cargarInstrumento = async () => {

        const instrumentoUrl = "http://localhost:3000/" + url + "/" + id;
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
                                <Button className={classes.boton} onClick={handleAbrir}>Comprar</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Dialog
                open={abrir}
                onClose={handleCerrar}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Quiere agregar el producto al carrito?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {instrumento.nombre} <br />
                        Precio: {instrumento.precio}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCerrar}>Cerrar</Button>
                    <Button onClick={handleAgregar} autoFocus> {/* AGREGAR EL PRODUCTO AL CARRITO*/}
                        Agregar
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default Instrumento