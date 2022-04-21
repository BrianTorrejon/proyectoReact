import { Box } from '@mui/material'
import React from 'react'
import Banner6 from './Componente/Banner6/Banner6'
import Banner from './Componente/BannerPrincipal/Banner'
import BannerExample from './Componente/Carrousel/Carrousel'
import Imgytexto from './Componente/ImgyTexto/Imgytexto'
import Mision from './Componente/Mision/Mision'
import ContenedorOfertas from './Componente/Ofertas/ContenedorOfertas'
import RedesSociales from './Componente/RedesSociales/RedesSociales'
import Ventajas from './Componente/Ventajas/Ventajas'

const Home = () => {
    return (<>
        <Banner />
        <Box style={{ marginTop: "80px" }}><ContenedorOfertas /></Box>
        <Box style={{ marginTop: "80px" }}><Ventajas /></Box>
        <Box style={{ marginTop: "80px" }}><Mision /></Box>
        <Box style={{ marginTop: "80px" }}><Banner6 /></Box>
        <Box style={{ marginTop: "75px" }}><Imgytexto /></Box>
        <Box style={{ marginTop: "80px" }}><BannerExample /></Box>
        <Box style={{ marginTop: "70px" }}><RedesSociales /></Box>
    </>)
}

export default Home