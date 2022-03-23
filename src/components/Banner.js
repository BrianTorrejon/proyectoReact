import { Box, Button} from '@material-ui/core'
import Stack from '@mui/material/Stack';


const Banner = () => {
    return (

        <Box style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519508234439-4f23643125c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1796&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '63.38vh', //aprox 500px
            display: 'flex',
            alignItems: 'center',
            color: 'white'
        }}>
            <Stack ml={5}>
                <h1>Apoya a la venta de instrumentos locales</h1>
                <h2>Decubre marcas y sus historias</h2>
                <Button size='medium' style={{color:'white', backgroundColor:'red', width:'200px', height:'45px'}}>Boton</Button>
            </Stack>
        </Box>
    )
}

export default Banner