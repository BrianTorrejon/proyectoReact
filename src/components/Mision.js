
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    contenedor: {
        marginLeft: '5%',
        marginRight: '5%',
        height: 487,
        width: '100%'
    },
    grid: {
    }
})

const Mision = () => {

    const classes = useStyles();

    return (


        <Grid container className={classes.contenedor}>
            <Grid item className={classes.grid} xs={12} sm={6}>
                <Typography variant='h4'>Quienes somos</Typography>
                <Typography variant="body1">
                    Nuesta mision es conenctar a las personas con el mundo de la musica a traves de los diversos intrumentos musicales.
                    Por que?
                </Typography>
                <ul>
                    <li>asdasd</li>
                    <li>asdasd</li>
                    <li>asdasd</li>
                    <li>asdasd</li>
                    <li>asdasd</li>
                </ul>
                <Button color="primary">Descubre nuestos intrumentos</Button>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6}>
                Imagen
            </Grid>
        </Grid>

    )
}

export default Mision