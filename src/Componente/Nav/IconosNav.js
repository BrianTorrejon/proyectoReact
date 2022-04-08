import React from "react";
import { Grid } from "@mui/material";
import "./Nav.css";
import Search from "../../Imagenes/Search.png";
import Cart from "../../Imagenes/Cart.png";
import Users from "../../Imagenes/Users.png";
import { IconButton } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useState } from "react";

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

function IconosNav() {

    const [cambiarBuscador, setCambiarBuscador] = useState(false)

    let navigate = useNavigate();
    return (
        <Grid container className="Herramientas" direction="row" justifyContent="flex-end">
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
                    <img src={Search} alt="Buscador" className="Search"></img>
                </IconButton>
            }

            <IconButton>
                <img src={Users} alt="Contacto" className="Users" />
            </IconButton >

            <IconButton onClick={() => navigate("/Carrito")} >
                <img src={Cart} alt="Carrito" className="Cart" />
            </IconButton>
        </Grid >

    );
}

export default IconosNav;