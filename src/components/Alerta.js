import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from "@material-ui/core/styles";
import { fontSize } from '@mui/system';

const useStyles = makeStyles({
  alerta: {
    height: '50px',
    "& .MuiAlert-action": { //Hace referencia al div que contiene el action del alert
      margin: 0,
      padding: 0
    },
    "& .MuiAlert-message": { //Hace referencia al mensaje del alert
      width: '100%',
      textAlign: 'center'

    }
  },

  caja: {
    width: '100%',
    fontSize: '14px'
  }
});

const Alerta = () => {
  const classes = useStyles();

  const [abrir, setAbrir] = React.useState(true);

  return (
    <Box className={classes.caja}>

      <Collapse in={abrir}>
        <Alert className={classes.alerta} icon={false}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAbrir(false);
              }}
              sx={{
                mt: 0.5,
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Entrega gratis a partir de $10.000. Regalo con Compra superior a $15.000
        </Alert>

      </Collapse>

    </Box>
  )
}

export default Alerta