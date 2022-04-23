import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, makeStyles } from '@material-ui/core';


const useStyle = makeStyles({
  root: {
    width: 280,
    height: 335,
    borderRadius: 20,
    "& .MuiCardMedia-root": {
      backgroundSize: 'contain'
    }
  },
  media: {
    width: 280,
    height: 160
  },
  nombre: {
    fontSize: '18px',
    fontWeight: 600
  },
  precio: {
    fontWeight: 600,
    color: '#503BD9',
    fontSize: '24px'
  },
  precioAnt: {
    fontSize: '16px'
  },
  boton: {
    fontSize: '18px',
    background: '#503BD9',
    color: 'white',
    textTransform: "none",
    '&:hover': {
      backgroundColor: '#4230B3',
      color: 'white'
    }
  }
})

const Tarjeta = ({ offer, agregarAlCarrito }) => {

  const classes = useStyle();
  const [width, setwidth] = useState(0)
  const [height, setheight] = useState(0)

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={offer.urlImg}
            title="Instrumento" />
          <CardContent>
            <Typography gutterBottom component="h2" className={classes.nombre}>
              {offer.nombre}
            </Typography>
            <Grid container alignItems="center" spacing={1} justifyContent="center">
              <Grid item>
                <Typography variant="body1" component="p" className={classes.precio}>
                  ${offer.precio},00
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary" className={classes.precioAnt}>
                  <strike>{offer.precioAnterior}</strike>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container justifyContent="center">
            <Box width="90%">
              <Button disableElevation variant="contained" size="small" fullWidth className={classes.boton} onClick={() => agregarAlCarrito(offer)}>
                Agregar al Carrito
              </Button>
            </Box>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}

export default Tarjeta;
