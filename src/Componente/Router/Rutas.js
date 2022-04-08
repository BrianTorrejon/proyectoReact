import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Alerta from '../Alerta/Alerta';
import Carrito from '../Carrito/Carrito';
import Footer from '../Footer/Footer';
import PaginaInstrumentos from '../../PaginaInstrumentos';
import Home from '../../Home';
import Instrumento from '../Ofertas/Instrumento';

const Rutas = () => {
    return (
        <Router>
            <Alerta />
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Instrumento/:id/:url' element={<Instrumento />} />
                <Route path='/Carrito' element={<Carrito />} />
                <Route path='/PaginaInstrumentos' element={<PaginaInstrumentos />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Rutas