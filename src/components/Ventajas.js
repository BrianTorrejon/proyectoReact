import React from 'react'
import TarjetaVentaja from './TarjetaVentaja'
import PianoIcon from '@mui/icons-material/Piano';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { Box, Grid } from '@material-ui/core';

const Ventajas = () => {
    return (
        <>
        <Grid component="h1" align="center"> ¿Por qué elejir <span>Sound On?</span></Grid>
            <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <TarjetaVentaja
                    icon={<PianoIcon sx={{ fontSize: 48 }} />}
                    titulo='Variedad'
                    texto='Gran variedad de intrumentos musicales de todas partes del mundo, dede lo mas convencional hasta lo mas insolito.' />
                <TarjetaVentaja
                    icon={<MusicNoteIcon sx={{ fontSize: 48 }} />}
                    titulo='¿Cómo suena?'
                    texto='Podras hacer prueba de sonido de cualquier instrumento sin compromiso o podras solicitar un video en caso de ser de otra ciudad.' />
                <TarjetaVentaja
                    icon={<LocalShippingOutlinedIcon sx={{ fontSize: 48 }} />}
                    titulo='Envios gratis'
                    texto='Con cualquier compra que realices, el envio es gratis a cualquier punto del pais. Y si el monto supera los $15.000 se agregan regalos.' />
                <TarjetaVentaja
                    icon={<LocalOfferOutlinedIcon sx={{ fontSize: 48 }} />}
                    titulo='Descuentos exclusivos'
                    texto='Tendras descuentos exclusivos en tu segunda compra que realices.' />
                <TarjetaVentaja
                    icon={<WorkspacePremiumOutlinedIcon sx={{ fontSize: 48 }} />}
                    titulo='Calidad'
                    texto='Contamos con un staff 100% calificado, y aseguramos la calidad de los instrumentos y sus respectivos accesorios' />
            </Box>
        </>
    )
}

export default Ventajas