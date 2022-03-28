import { Container, IconButton, Grid, Box, makeStyles } from "@material-ui/core";
import Facebook from '@mui/icons-material/FacebookRounded';
import Whatsapp from '@mui/icons-material/WhatsappRounded';
import Instagram from '@mui/icons-material/Instagram';
import Telegram from '@mui/icons-material/Telegram';
import Twitter from '@mui/icons-material/Twitter';
import Email from '@mui/icons-material/EmailRounded';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyle = makeStyles({
  box: {
    display: "flex",
    minHeight: 260,
    backgroundColor: "#D4D1FC",
    alignItems: "center",
    justifyContent: "center",
    '& .MuiButtonBase-root': {
      backgroundColor: "#503BD9",
      margin: 10,
      width: 60,
      height: 60
    },
    '& .MuiSvgIcon-root': {
      color: '#D4D1FC',
      fontSize: 42
    }
  }

})

export const RedesSociales = () => {

  const classes = useStyle()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));


  return (
    <>
      <Box //style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/003/536/679/non_2x/light-purple-background-with-music-symbols-vector.jpg)',
        //  backgroundRepeat: 'no-repeat',
        //  backgroundSize: 'cover',
        //  backgroundPosition: 'center'}}
        className={classes.box}>
        <Container>
          <Grid component="h1" align="center">Compartelo con un amigo</Grid>
          <Grid container align="center">
            {matches ?
              <Grid item sm={12} md={12} lg={12}>
                <IconButton ><Facebook /></IconButton>
                <IconButton ><Whatsapp /></IconButton>
                <IconButton ><Telegram /></IconButton>
                <IconButton ><Twitter /></IconButton>
                <IconButton ><Email /></IconButton>
                <IconButton ><Instagram /></IconButton>
              </Grid>
              :
              <><Grid item xs={12}>
                <IconButton ><Facebook /></IconButton>
                <IconButton ><Whatsapp /></IconButton>
                <IconButton ><Telegram /></IconButton>
              </Grid>
                <Grid item xs={12}>
                  <IconButton ><Twitter /></IconButton>
                  <IconButton ><Email /></IconButton>
                  <IconButton ><Instagram /></IconButton>
                </Grid></>
            }
          </Grid>
        </Container>
      </Box >
    </>
  )
}

export default RedesSociales;