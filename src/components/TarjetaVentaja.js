import { Box, Typography } from '@material-ui/core'
import React from 'react'

const TarjetaVentaja = ({ icon, titulo, texto }) => {
    return (
        <>

            <Box m={4} style={{ minHeight: '301px', width: '210px', }}> {/* m = 4  son 32 px */}
                {icon}
                <Typography variant='h5' >{titulo}</Typography>
                <Typography variant='body1' >{texto}</Typography>
            </Box>

        </>
    )
}

export default TarjetaVentaja