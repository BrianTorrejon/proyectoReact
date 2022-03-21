import React, {useState,} from 'react';
import {AppBar, Menu, MenuList, Toolbar, Box, BottomNavigation, IconButton} from '@mui/material';




function App() {
    const [dropdown, setDropdown]=useState(false);

    const abrirCerrarDropdown=()=>{
      setDropdown (!dropdown);
    }
  
    const LinkButton = (props) => <BottomNavigation color='primary' isOpen={dropdown} toggle={abrirCerrarDropdown} bool={true} {...props} /> 
    return (
        <AppBar position= 'fixed'>
            <Toolbar>
                <Box>
                <img src='C:\Users\Jonatan\proyectoReact\public\speaker-with-three-sound-waves-sound-emoji-11563014782dp23c5uqq3.png'alt='Simbolo Marca' ></img>
                <h1>Sound On</h1>  
                </Box>
                <Box>
                {/* Drop Dows */}
    
                <IconButton edge='start' color= 'inherit' arial-label= 'menu' ></IconButton>
               <Menu>
                <LinkButton to='/'>
                    Home
                </LinkButton>
                </Menu>

                <Menu>
                <LinkButton to='/Categories'>
                    Categorias
                </LinkButton>
                <MenuList>Guitarras/Bajos</MenuList>
                <MenuList>Baterias</MenuList>
                <MenuList>Piano</MenuList>
                <MenuList>Violines</MenuList>
                </Menu>

                <Menu>
                <LinkButton to='/Sobre Nosotros'>
                    Sobre Nosotros
                </LinkButton>
                <MenuList>Historia</MenuList>
                <MenuList>Contacto</MenuList>
                </Menu>

                <Menu>
                <LinkButton to='/Mi Cuenta'>
                    Mi Cuenta
                </LinkButton>
                <MenuList>Entrar</MenuList>
                <MenuList>Abrir Cuenta Nueva</MenuList>
                </Menu>
                <LinkButton to='/Preguntas Frecuentes'>
                Preguntas Frecuentes
                </LinkButton>
                
                </Box>

                <Box>
                {/* iconos */}
                </Box>
            </Toolbar>
        </AppBar>
    );
  }

  export default Nav;