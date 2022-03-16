import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';

const Tarjeta = ({ offer }) => {
  const cardStyle = {
    width: '280px',
    height: '310px',
    borderRadius: 20
  }
  return (
    <Card style={cardStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Instrumento"
          height="150"
          width="280px"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Classical_Guitar_two_views.jpg/800px-Classical_Guitar_two_views.jpg"
          title="Instrumento"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {offer.nombre}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {offer.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justifyContent="center">
          <Button variant="contained" size="small" color="primary" fullWidth>
            Quick Shop
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default Tarjeta;
