import { Box } from '@mui/material'
import React from 'react'
import Banner6 from './Banner6/Banner6'
import Banner from './BannerPrincipal/Banner'
import BannerExample from './Carrousel/Carrousel'
import Footer from './Footer/Footer'
import Imgytexto from './ImgyTexto/Imgytexto'
import Mision from './Mision/Mision'
import ContenedorOfertas from './Ofertas/ContenedorOfertas'
import RedesSociales from './RedesSociales/RedesSociales'
import Ventajas from './Ventajas/Ventajas'

const Home = () => {
    return (<>
        <Banner />
        <Box style={{ marginTop: "80px" }}><ContenedorOfertas /></Box>
        <Box style={{ marginTop: "80px" }}><Ventajas /></Box>
        <Box style={{ marginTop: "80px" }}><Mision /></Box>
        <Box style={{ marginTop: "80px" }}><Banner6 /></Box>
        <Box style={{ marginTop: "75px" }}><Imgytexto /></Box>
        <Box style={{ marginTop: "80px" }}><BannerExample /></Box>
        <Box style={{ marginTop: "80px"}}><RedesSociales /></Box>

        <Footer />
    </>)
}

export default Home