import React, { useState } from "react";
import {
  AppBar,
  Menu,
  MenuList,
  Toolbar,
  Box,
  BottomNavigation,
  IconButton,
  Grid,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PageviewIcon from "@mui/icons-material/Pageview";
import "./Nav.css";

function Nav() {
  const [dropdown, setDropdown] = useState(false);

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  };

  const LinkButton = (props) => (
    <BottomNavigation
      color="secondary"
      isOpen={dropdown}
      toggle={abrirCerrarDropdown}
      bool={true}
      {...props}
    />
  );
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container>
          <Grid>
            <Box className="Marca">
            </Box>
            <Box className="NombreMarca" >
                <h1>Sound On</h1>
              </Box>
          </Grid>
        </Grid>
        <Box>
          {/* Drop Dows */}

          <IconButton
            edge="start"
            color="inherit"
            arial-label="menu"
          ></IconButton>
          <header>
            <LinkButton to="/">Home</LinkButton>

            <LinkButton to="/Categories">Categorias</LinkButton>
            <Menu>
              <MenuList>Guitarras/Bajos</MenuList>
              <MenuList>Baterias</MenuList>
              <MenuList>Piano</MenuList>
              <MenuList>Violines</MenuList>
            </Menu>

            <LinkButton to="/Sobre Nosotros">Sobre Nosotros</LinkButton>
            <Menu>
              <MenuList>Historia</MenuList>
              <MenuList>Contacto</MenuList>
            </Menu>

            <LinkButton to="/Mi Cuenta">Mi Cuenta</LinkButton>
            <Menu>
              <MenuList>Entrar</MenuList>
              <MenuList>Abrir Cuenta Nueva</MenuList>
            </Menu>

            <LinkButton to="/Preguntas Frecuentes">
              Preguntas Frecuentes
            </LinkButton>
          </header>
        </Box>
        {/* iconos */}
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box>
              <AccountCircleIcon className="Users"></AccountCircleIcon>
              <ShoppingCartIcon className="Cart"></ShoppingCartIcon>
              <PageviewIcon className="Search"></PageviewIcon>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
