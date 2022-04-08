import { Button, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
    item : {
        marginTop: "20px"
    }
})

const ItemCarrito = () => {

    const classes = useStyle();

    return (
        <>
            <Grid container className={classes.item}>
                <Grid item sm={6} xs={12}>
                    Imagen
                    Marca
                    Nombre <br />

                </Grid>
                <Grid item sm={6} xs={12}>Precio: $10000 * 2 = 20000</Grid>
                <Button>Eliminar uno</Button>
                <Button>Eliminar todos</Button>
            </Grid>
            <hr />
        </>
    )
}

export default ItemCarrito