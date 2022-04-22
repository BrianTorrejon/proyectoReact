import { React, useState } from "react";
import { Grid } from "@mui/material";
import Search from "../../Imagenes/Search.png";
import Cart from "../../Imagenes/Cart.png";
import Users from "../../Imagenes/Users.png";
import { IconButton } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Modal from "../CarritoModal/Modal";
import { makeStyles } from '@material-ui/core';

const SearchBig = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15)
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    height: '100%',
    '& .MuiInputBase-input': {
        paddingLeft: `calc(1em + ${theme.spacing(4)})`

    },
}));

const useStyle = makeStyles({
Cart,
Users,
Search: {
  height: '48px',
  width: '48px',
 '&:hover': {
    transform: 'scale(1.15)'
 } 
}
})


  

const IconosNav = ({ offer }) => {

    const classes = useStyle();

    const [abrirCarrito, setAbrirCarrito] = useState(false)

    const [cambiarBuscador, setCambiarBuscador] = useState(false)
    
 
    return (
        <Grid container direction="row" justifyContent="flex-end">
            {cambiarBuscador ?
                <SearchBig onBlur={() => setCambiarBuscador(false)}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </SearchBig>
                :
                <IconButton onClick={() => setCambiarBuscador(true)}>
                    <img src={Search} alt="Buscador" className={classes.Search}></img>
                </IconButton>
            }

            <IconButton>
                <img src={Users} alt="Contacto" className={classes.Users} />
            </IconButton >

            <IconButton onClick={() => setAbrirCarrito(!abrirCarrito)} >
                <img src={Cart} alt="Carrito" className={classes.Cart} />
               
            </IconButton>
            {abrirCarrito &&
                <Modal
                    estado={abrirCarrito}
                    cambiarEstado={setAbrirCarrito} />
            }
        </Grid >
    );
}

export default IconosNav;