import { Container, IconButton, Grid, Box } from "@material-ui/core";
import facebook from '../icons/facebook.png'
import ig from '../icons/instagram.png'
import lin from '../icons/linkedin.png'
import mail from '../icons/mail.png'
import twitter from '../icons/twitter.png'
import wp from '../icons/whatsapp.png'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export const RedesSociales = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));


  return (
    <>
      <Box
        display="flex"
        height={260}
        bgcolor="lightgreen"
        alignItems="center"
        justifyContent="center">
        <Container>
          <Grid component="h1" align="center">Compartelo con un amigo</Grid>
          {console.log(matches)}

          <Grid container align="center">
            {console.log(theme.breakpoints.up('sm'))}
            {matches ?
              <Grid item sm={12} md={12} lg={12}>
                <IconButton><img src={facebook} alt="facebook" /></IconButton>
                <IconButton><img alt="instagram" src={ig} /></IconButton>
                <IconButton><img src={lin} alt='linkedin' /></IconButton>
                <IconButton><img src={mail} alt='mail' /></IconButton>
                <IconButton><img src={twitter} alt='twitter' /></IconButton>
                <IconButton><img src={wp} alt='whatsapp' /></IconButton>
              </Grid>
              :
              <><Grid item xs={12}>
                <IconButton><img src={facebook} alt="facebook" /></IconButton>
                <IconButton><img alt="instagram" src={ig} /></IconButton>
                <IconButton><img src={lin} alt='linkedin' /></IconButton>
              </Grid>
              <Grid item xs={12}>
                  <IconButton><img src={mail} alt='mail' /></IconButton>
                  <IconButton><img src={twitter} alt='twitter' /></IconButton>
                  <IconButton><img src={wp} alt='whatsapp' /></IconButton>
                </Grid></>
            }
          </Grid>
        </Container>
      </Box >

    </>
  )
}

export default RedesSociales;