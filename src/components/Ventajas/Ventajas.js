import React from 'react'
import TarjetaVentaja from './TarjetaVentaja'
import PianoIcon from '@mui/icons-material/Piano';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    span: {
        color: '#503BD9'
    },
    contenedor: {
        width: '100%',
        margin: '0', 
        "& .MuiSvgIcon-root": { fontSize: '48px' } //Regerencia al icono
    }
})

const Ventajas = () => {

    const classes = useStyle();

    return (
        <>
        
            <Grid component="h1" align="center"> ¿Por qué elejir <span className={classes.span}>Sound On?</span></Grid>
            <Grid className={classes.contenedor} container spacing={4}>
                <TarjetaVentaja
                    icon={<PianoIcon />}
                    titulo='Variedad'
                    texto='Gran variedad de intrumentos musicales de todas partes del mundo, dede lo mas convencional hasta lo mas insolito.' />
                <TarjetaVentaja
                    icon={<MusicNoteIcon />}
                    titulo='¿Cómo suena?'
                    texto='Podras hacer prueba de sonido de cualquier instrumento sin compromiso o podras solicitar un video en caso de ser de otra ciudad.' />
                <TarjetaVentaja
                    icon={<LocalShippingOutlinedIcon />}
                    titulo='Envios gratis'
                    texto='Con cualquier compra que realices, el envio es gratis a cualquier punto del pais. Y si el monto supera los $15.000 se agregan regalos.' />
                <TarjetaVentaja
                    icon={<LocalOfferOutlinedIcon />}
                    titulo='Descuentos exclusivos'
                    texto='Tendras descuentos exclusivos en tu segunda compra que realices.' />
                <TarjetaVentaja
                    icon={<WorkspacePremiumOutlinedIcon />}
                    titulo='Calidad'
                    texto='Contamos con un staff 100% calificado, y aseguramos la calidad de los instrumentos y sus respectivos accesorios' />
            </Grid>
        </>
    )
}

export default Ventajas