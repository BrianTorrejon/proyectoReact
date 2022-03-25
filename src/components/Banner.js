import { Box, Button, Typography } from '@material-ui/core'
import Stack from '@mui/material/Stack';


const Banner = () => {
    return (
        <Box style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1519508234439-4f23643125c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1796&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '63.38vh', //aprox 500px
            display: 'flex',
            alignItems: 'center',
        }}>
            <Stack ml={5} >
                <Typography variant='h3' style={{ color: 'white' }}>Apoya a la creatividad musical</Typography>
                <Typography variant='h4' style={{ marginBottom: '30px', color: 'white' }}>Decubre marcas y sus historias</Typography>
                <Button size='medium' style={{ color: 'white', backgroundColor: '#503BD9', width: '200px', height: '45px' }}>Buscar instrumentos</Button>
            </Stack>
        </Box >
    )
}

export default Banner