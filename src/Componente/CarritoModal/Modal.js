import { React, useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import ItemCarrito from '../Carrito/ItemCarrito';
import axios from 'axios';

const useStyle = makeStyles({
    botonCerrar: {
        float: 'right'
    },
    total: {
        fontWeight: 600,
        color: '#503BD9',
        fontSize: '24px',
        float: 'right',
    }
})
const Modal = ({ estado, cambiarEstado }) => {

    let total = 0;

    const classes = useStyle();

    const handleCerrar = () => {
        cambiarEstado(!estado)
    }

    const [lista, setLista] = useState([]);

    const cargarCarrito = async () => {

        const carritoUrl = "http://localhost:3000/cart";
        const resCarrito = await axios.get(carritoUrl);
        let itemsCarrito = await resCarrito.data;
        setLista(itemsCarrito);
    };

    useEffect(() => {
        cargarCarrito()
    }
        , [])

    return (
        <Dialog
            open={estado}
            onClose={handleCerrar}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" >
                {"Carrito"}
                <IconButton onClick={handleCerrar} className={classes.botonCerrar}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {
                        lista.length ?
                            (
                                lista.map(cartItem =>
                                    < ItemCarrito item={cartItem} >
                                        {total = total + cartItem.precio}
                                    </ItemCarrito>
                                )
                            )
                            :
                            (<Typography>SU CARRITO SE ENCUENTRA VACIO</Typography>)
                    }
                    <Typography className={classes.total}> TOTAL: ${total}</Typography>

                </DialogContentText>
            </DialogContent>
            <DialogActions >
                <Button onClick={handleCerrar} >Limpiar Carrito</Button>
                <Button onClick={handleCerrar} >Cerrar</Button>
                <Button onClick={handleCerrar} >Comprar</Button>
            </DialogActions>
        </Dialog >
    )
}

export default Modal