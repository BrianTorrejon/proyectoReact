import { Container, Button } from '@material-ui/core'
import React, { useReducer }  from 'react'
import ItemCarrito from './ItemCarrito'
import { Types } from './actions/shoppingActions';

const useStyle = makeStyles({
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
const [state, dispatch]=useReducer(shoppingReducer, shoppinginitialState)
const CLEARCART=()=>{
  dispatch({ type: Types.CLEAR_CART})
}

const Carrito = () => {
  return (
    <>
      <Container>
        <ItemCarrito />
        <Button className={classes.boton} onClick={(CLEARCART)}>Limpiar Carrito</Button>
        </Container>


    </>
  )
}

export default Carrito