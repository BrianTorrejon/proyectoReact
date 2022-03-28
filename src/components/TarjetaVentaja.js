import {Typography, makeStyles, Grid } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
    box: {
        minHeight: '230px',
        maxHeight: '301px',
        minWidth: '210px'
    }
})

const TarjetaVentaja = ({ icon, titulo, texto }) => {

    const classes = useStyle()

    return (
        <>
            <Grid item xs={12} sm className={classes.box}>
                {icon}
                <Typography variant='h5' >{titulo}</Typography>
                <Typography variant='body1' >{texto}</Typography>
            </Grid>
        </>
    )
}

export default TarjetaVentaja