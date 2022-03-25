import React from 'react'
import TarjetaVentaja from './TarjetaVentaja'
import PianoIcon from '@mui/icons-material/Piano';
import { Box, Container, Grid } from '@material-ui/core';

const Ventajas = () => {
    return (
        <>
            <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <TarjetaVentaja
                    icon={<PianoIcon sx={{ fontSize: 48 }} />}
                    titulo='Titulo'
                    texto='asdd asdd asdd asdd adasdddas  asddddda  asddda asdsdsa asdd' />
                <TarjetaVentaja
                    icon={<PianoIcon sx={{ fontSize: 48 }} />}
                    titulo='Titulo'
                    texto='asdd asdd asdd asdd adasdddas  asddddda  asddda asdsdsa asdd' />
                <TarjetaVentaja
                    icon={<PianoIcon sx={{ fontSize: 48 }} />}
                    titulo='Titulo'
                    texto='asdd asdd asdd asdd adasdddas  asddddda  asddda asdsdsa asdd' />
                <TarjetaVentaja
                    icon={<PianoIcon sx={{ fontSize: 48 }} />}
                    titulo='Titulo'
                    texto='asdd asdd asdd asdd adasdddas  asddddda  asddda asdsdsa asdd' />
                <TarjetaVentaja
                    icon={<PianoIcon sx={{ fontSize: 48 }} />}
                    titulo='Titulo'
                    texto='asdd asdd asdd asdd adasdddas  asddddda  asddda asdsdsa asdd' />
            </Box>
        </>


    )
}

export default Ventajas