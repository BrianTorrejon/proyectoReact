import { Box, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import PianoIcon from '@mui/icons-material/Piano';

const TarjetaVentaja = () => {
    return (
        <>
            <Box style={{ minHeight: '301px', width: '210px', }}>
                <PianoIcon />
                <Typography variant='h5'>Titulo</Typography>
                <Typography variant='body1'>asdasdasd asdasdas dasdasdasdasda  asdasd asdasd asdasd  qweqwe </Typography>
            </Box>
        </>
    )
}

export default TarjetaVentaja