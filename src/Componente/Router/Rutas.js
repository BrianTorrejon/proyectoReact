import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Alerta from '../Alerta/Alerta';
import Modal from '../CarritoModal/Modal';
import Footer from '../Footer/Footer';
import PaginaInstrumentos from '../../PaginaInstrumentos';
import Home from '../../Home';

const Rutas = () => {
    return (
        <Router>
            <Alerta />
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Carrito' element={<Modal />} />
                <Route path='/PaginaInstrumentos' element={<PaginaInstrumentos />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Rutas