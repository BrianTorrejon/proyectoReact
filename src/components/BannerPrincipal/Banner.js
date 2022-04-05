import { Box, Button, Typography } from '@material-ui/core'
import Stack from '@mui/material/Stack';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    box: {
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1519508234439-4f23643125c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1796&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '63.38vh', //aprox 500px
        display: 'flex',
        alignItems: 'center',
        color: '#ffffff'
    },
    h3: {
        fontSize: '50px'
    },
    h4: {
        marginBottom: '30px',
        fontSize: '26px'
    },
    boton: {
        color: '#ffffff',
        backgroundColor: '#503BD9',
        width: '200px',
        height: '45px',
        fontSize: '14px',
        '&:hover': {
            backgroundColor: '#4230B3'
        }
    }
})

const Banner = () => {

    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <Stack ml={6.3} > {/* aprox 50px */}
                <Typography variant='h3' className={classes.h3}>Apoya a la creatividad musical</Typography>
                <Typography variant='h4' className={classes.h4}>Decubre nuevos instrumentos y sus historias</Typography>
                <Button size='medium' className={classes.boton}>Buscar instrumentos</Button>
            </Stack>
        </Box >
    )
}

export default Banner