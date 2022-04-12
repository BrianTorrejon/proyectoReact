import { React } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, makeStyles } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import ItemCarrito from '../Carrito/ItemCarrito';

const useStyle = makeStyles({
    botonCerrar: {
        float: 'right'
    }
})
const Modal = ({ estado, cambiarEstado }) => {

    const classes = useStyle();

    const handleCerrar = () => {
        cambiarEstado(!estado)
    }

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
                    <ItemCarrito />
                    <ItemCarrito />
                    <ItemCarrito />
                    <ItemCarrito />
                    <ItemCarrito />
                    <ItemCarrito />
                    <ItemCarrito />
                    <ItemCarrito />
                    <ItemCarrito />
                    <ItemCarrito />
                    <ItemCarrito />
                    <ItemCarrito />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCerrar}>Limpiar Carrito</Button>
                <Button onClick={handleCerrar}>Cerrar</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal