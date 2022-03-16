import React from 'react';
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
    maxWidth: 280,
    height: 335,
    borderRadius: 20
  },

  media: {
    width: 280,
    height: 160,
  },

  mediaLarge: {
    width: 100,
    height: 160,
  }
})

const Tarjeta = ({ offer }) => {
  const classes = useStyle();
  const img = new Image();
  img.src = offer.urlImg;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        {
          img.height > img.width ?
        <CardMedia
          className={classes.mediaLarge}
          image={offer.urlImg}
          title="Instrumento" />

        :<CardMedia
          className={classes.media}
          image={offer.urlImg}
          title="Instrumento"
        />
        }

        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {offer.nombre}
          </Typography>
          <Grid container alignItems="center" spacing={1} justifyContent="center">
            <Grid item>
              <Typography variant="body1" color="textSecondary" component="p">
                {offer.precio}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                <strike>{offer.precioAnterior}</strike>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justifyContent="center">
          <Box width="90%">
            <Button variant="contained" size="small" color="primary" fullWidth>
              Quick Shop
            </Button>
          </Box>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default Tarjeta;
