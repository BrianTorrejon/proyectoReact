import React from 'react';
import {Appbar, Menu, MenuList, Toolbar, Box, Button, IconButton} from '@mui/material';
import {link} from 'react-router-dom';



function App() {
    <>
    const LinkButton =(props) => <Button color='primary' component={link} {...props} /> 
    return (
        <Appbar position= 'fixed'>
            <Toolbar>
                <Box>
                {/* logo */}
                </Box>
                <Box>
                {/* Drop Dows */}
                <Menu>
                <IconButton edge='start' color= 'inherit' arial-label= 'menu' ></IconButton>
               
                <LinkButton to='/'>
                    Home
                </LinkButton>
                <LinkButton to='/categories'>
                    Categories
                </LinkButton>
                </Menu>
                
                </Box>

                <Box>
                {/* iconos */}
                </Box>
            </Toolbar>
        </Appbar>
    );
    </>
  }

  export default Nav