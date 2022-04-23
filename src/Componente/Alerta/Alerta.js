import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from "@material-ui/core/styles";
import { useState } from 'react';


const useStyles = makeStyles({
  alerta: {
    height: '50px',
    "& .MuiAlert-action": { //Hace referencia al div que contiene el action del alert
      margin: 0,
      padding: 0,
      color: '#000000'
    },
    "& .MuiAlert-message": { //Hace referencia al mensaje del alert
      width: '100%',
      textAlign: 'center',
      color: '#000000',
    }
  },
  caja: {
    width: '100%',
    fontSize: '14px',
    color: '#E66EB2',
    backgroundColor: "#F05228",
    "& .MuiPaper-root": {
      backgroundColor: "#F05228",
    }
  }
});

const Alerta = () => {
  const classes = useStyles();
  const [abrir, setAbrir] = useState(true);

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