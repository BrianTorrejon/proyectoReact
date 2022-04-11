
import { Box, Button, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const useStyles = makeStyles({
    contenedor: {
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%',
        fontSize: 16,
        '& .MuiSvgIcon-root': {
            color: '#503BD9'
        },
        '& .MuiListItem-root': {
            padding: 10
        }
    },
    titulo: {
        fontSize: 40
    },
    grid: {
        minWidth: 350
    },
    imagen: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 570,
        width: '100%'
    },
    span: {
        color: '#503BD9'
    },
    boton: {
        color: '#ffffff',
        backgroundColor: '#503BD9',
        height: '45px',
        fontSize: '14px',
        '&:hover': {
            backgroundColor: '#4230B3'
        }
    }
})

const Mision = () => {

    const classes = useStyles();

    return (
        <Box>
            <Grid container className={classes.contenedor} spacing={8}>
                <Grid item xs={12} sm={6} className={classes.grid}>
                    <Typography variant='h4' className={classes.titulo}><span className={classes.span}>¿Quieres formar parte</span> del mundo de la musica?</Typography>
                    <Typography component='div' >
                        <Box sx={{ fontWeight: 'bold' }}>
                            Nuesta mision es conectar a las personas con el mundo de la musica a traves de los diversos intrumentos musicales.
                            ¿Por que?
                        </Box>
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Tocar un instrumento incita a desarrollar la creatividad." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ayuda al bienestar de la vida diaria, mejorando tu estado de animo." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Fomenta la facilidad de adaptacion a cambios constantes." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Es un buen ejercicio para el desarrollo cerebral y la memoria." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Mayor disciplina y paciencia." />
                        </ListItem>
                    </List>

                    <Button className={classes.boton}>Descubre nuestos intrumentos</Button>
                </Grid>
                <Grid item className={classes.imagen} xs={12} sm={6} />


            </Grid>
        </Box>
    )
}

export default Mision