import React from "react";
import { Grid } from "@mui/material";
import "./Nav.css";
import Search from "../../Imagenes/Search.png";
import Cart from "../../Imagenes/Cart.png";
import Users from "../../Imagenes/Users.png";
import { IconButton } from "@material-ui/core";
import { useNavigate } from "react-router-dom";


function IconosNav() {
    let navigate = useNavigate();
    return (
        <Grid container className="Herramientas" direction="row" justifyContent="flex-end">
            <img src={Search} alt="Buscador" className="Search"></img>
            <img src={Users} alt="Contacto" className="Users"></img>
            <IconButton onClick={() => navigate("/Carrito")}>
                <img src={Cart} alt="Carrito" className="Cart"></img>
            </IconButton>
        </Grid>

    );
}

export default IconosNav;