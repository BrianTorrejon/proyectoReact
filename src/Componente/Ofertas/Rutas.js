import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Instrumento from './Instrumento';
import Home from "../Home"
import Nav from '../Nav/Nav';
import Alerta from '../Alerta/Alerta';
import Carrito from '../Carrito/Carrito';

const Rutas = () => {
    return (
        <Router>
            <Alerta />
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Instrumento/:id' element={<Instrumento />} />
                <Route path='/Carrito' element={<Carrito />} />
            </Routes>
        </Router>
    )
}

export default Rutas