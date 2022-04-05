import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Instrumento from './Instrumento';
import Home from "../Home"
import Nav from '../Nav/Nav';
import Alerta from '../Alerta/Alerta';

const Rutas = () => {
    return (
        <Router>
            <Alerta />
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Instrumento/:id' element={<Instrumento />} />
            </Routes>
        </Router>
    )
}

export default Rutas