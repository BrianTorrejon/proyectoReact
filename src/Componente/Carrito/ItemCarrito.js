import { Button, Grid, makeStyles, CardActions, Typography } from '@material-ui/core'
import React, { useReducer } from 'react';
import { Types } from './actions/shoppingActions';
import { shoppingReducer, shoppinginitialState, quantity } from './reducer/shoppingReducer';

const useStyle = makeStyles({
    item : {
        marginTop: "20px"
    },
      boton: {
        fontSize: '18px',
        background: '#503BD9',
        color: 'white',
        '&:hover': {
          backgroundColor: '#4230B3',
          color: 'white'
          }
        }
})

const ItemCarrito = (offer) => {
    let {id, nombre, precio, precioAnterior, urlImg}=offer
    const classes = useStyle()
const [state, dispatch]=useReducer(shoppingReducer, shoppinginitialState)
const [products, Cart]= state

const ADDTOCART=(id)=>{
    dispatch ({type: Types.ADD_TO_CART, payload:id })
}

const deleteFromCart=(id, all = false ) => {
    if (all) {
        dispatch ({type: Types.REMOVE_ONE_PRODUCT, payload: id}) 
    } else {
        dispatch ({ type: Types.REMOVE_ALL_PRODUCT, payload: id}) 
    }
    
       
}


return (

            <Grid container className={classes.item}>
                <Grid item sm={6} xs={12}>
                <Typography gutterBottom component="h2" className={classes.nombre}>

                className={classes.media}
                image={urlImg}
                title="Instrumento" />
            </Typography>
            </Grid>
                <Typography gutterBottom component="h2" className={classes.nombre}>
            {nombre}
          </Typography>
          <Grid container alignItems="center" spacing={1} justifyContent="center">
            <Grid item>
              <Typography variant="body1" component="p" className={classes.precio}>
                {precio}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary" className={classes.precioAnt}>
                <strike>{precioAnterior}</strike>
              </Typography>
                </Grid>
                </Grid>
               
                <Grid item sm={6} xs={12}>Precio:  {precio}.00 *  {quantity} =  {precio * quantity} </Grid>
                <CardActions>
                <Button className={classes.boton} onClick={()=> deleteFromCart (id) }>Eliminar Uno</Button>
                <hr />
                <Button className={classes.boton} onClick={()=> deleteFromCart (id, true) }>Eliminar Todos</Button>
                </CardActions>
                </Grid>
            
            
   
    )
}

export default ItemCarrito;