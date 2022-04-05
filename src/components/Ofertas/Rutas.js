import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContenedorOfertas from './ContenedorOfertas';
import Instrumento from './Instrumento';

const Rutas = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<ContenedorOfertas />} />
                <Route path='/Instrumento/:id' element={<Instrumento />} />
            </Routes>
        </Router>
    )
}

export default Rutas