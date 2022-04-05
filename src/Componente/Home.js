import React from 'react'
import Banner6 from './Banner6/Banner6'
import Banner from './BannerPrincipal/Banner'
import BannerExample from './Carrousel/Carrousel'
import Footer from './Footer/Footer'
import Imgytexto from './ImgyTexto/Imgytexto'
import Mision from './Mision/Mision'
import ContenedorOfertas from './Ofertas/ContenedorOfertas'
import Ventajas from './Ventajas/Ventajas'

const Home = () => {
    return (<>
        <Banner />
        <ContenedorOfertas />
        <Ventajas />
        <Mision />
        <Banner6 />
        <Imgytexto />
        <BannerExample />
        <Footer />
    </>)
}

export default Home