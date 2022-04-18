import { Button, Grid, makeStyles } from '@material-ui/core'
import { Typography } from '@mui/material';
import React from 'react'

const useStyle = makeStyles({
    item: {
        marginTop: "30px",
        color: "black"
    },
    precio: {
        fontWeight: 600,
        color: '#503BD9',
        fontSize: '24px'
    },
    boton: {
        fontSize: '12px',
        background: '#503BD9',
        color: 'white',
        marginTop: "5px",
        marginRight: "5px",
        textTransform: "none",
        '&:hover': {
            backgroundColor: '#4230B3',
            color: 'white'
        }
    }
})

const ItemCarrito = ({ item, eliminarProducto }) => {

    const classes = useStyle();

    return (
        <>
            <Grid container className={classes.item}>
                <Grid item sm={4} xs={12}>
                    <Grid item style={{
                        width: "150px",
                        height: "150px",
                        backgroundImage: "url(" + item.urlImg + ")",
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        border: "1px solid #503BD9"
                    }} />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Typography variant='h5'>{item.marca}</Typography>
                    <Typography variant='h6'>{item.nombre}</Typography>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Typography >${item.precio},00 x {item.quantity} =
                        <span className={classes.precio}> ${item.precio * item.quantity},00</span>
                    </Typography>
                </Grid>
                <Button className={classes.boton} onClick={() => eliminarProducto(item)} >Eliminar uno</Button>
                <Button className={classes.boton} onClick={() => eliminarProducto(item, true)}>Eliminar todos</Button>

            </Grid>
            <hr />
        </>
    )
}

export default ItemCarrito