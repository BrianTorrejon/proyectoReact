import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Grid, 
  IconButton,
  } from "@mui/material";
import "./Nav.css";
import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));



function Nav() {
  const [anchorEl, setAnchorEl] = useState(true);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
  const handleClose = () => {
    setAnchorEl(false);
  };

  const LinkButton = (props) =>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        {...props} />
  return (
    <AppBar className="Navbar">
      <Toolbar className="config">
        <Grid container>
          <Grid>
            <Box className="Marca"></Box>
            <Box className="NombreMarca"><h1><b>Sound On</b></h1></Box>
          </Grid>
        </Grid>
        <Grid>
          {/* Drop Dows */}
          <Box>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClose}
              color="inherit"
            >
            </IconButton>
          </Box>
        </Grid>
        <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
         <Grid container spacing={2} columns={48}>
              <Grid item xs="auto"> 
            <LinkButton to="/">Home</LinkButton>
              </Grid>
              <Grid item xs={8}>         
            <LinkButton to="/Categories">Categorias</LinkButton>
              <MenuItem onClick={handleClose} disableRipple>Guitarras/Bajos</MenuItem>           
              <MenuItem onClick={handleClose} disableRipple>Baterias</MenuItem>
              <MenuItem onClick={handleClose} disableRipple>Piano/Teclado</MenuItem>
              <MenuItem onClick={handleClose} disableRipple>Violines</MenuItem>
              <MenuItem onClick={handleClose} disableRipple>Parlantes</MenuItem>
              <MenuItem onClick={handleClose} disableRipple>Microfonos</MenuItem>
              <MenuItem onClick={handleClose} disableRipple>Auriculares</MenuItem>
              </Grid>
              <Grid item xs={12}>  
            <LinkButton to="/Sobre Nosotros">Sobre Nosotros</LinkButton>
              <MenuItem onClick={handleClose} disableRipple>Historia</MenuItem>
              <MenuItem onClick={handleClose} disableRipple>Contacto</MenuItem>
              </Grid>
              <Grid item xs={8}>  
            <LinkButton to="/Mi Cuenta">Mi Cuenta</LinkButton>
              <MenuItem onClick={handleClose} disableRipple>Entrar</MenuItem>
              <MenuItem onClick={handleClose} disableRipple>Abrir Cuenta Nueva</MenuItem>
              </Grid>
              <Grid item xs> 
            <LinkButton to="/Preguntas Frecuentes">Preguntas Frecuentes</LinkButton>
              </Grid>
         </Grid>
    </StyledMenu>
        {/* iconos */}
          <Grid container className="Herramientas" direction="row" justifyContent="flex-end">
            <Box className="Search"></Box>
            <Box className="Users"></Box>
            <Box className="Cart"></Box>
            </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
