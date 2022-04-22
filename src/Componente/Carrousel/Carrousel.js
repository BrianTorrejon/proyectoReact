import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  Banner: {
    height: '400px',
    position: 'relative',
    backgroundColor: 'tomato'
  },
  Media: {
    backgroundColor: 'white',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    transition: '300ms',
    cursor: 'pointer',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
 MediaCaption: {
    textOverflow: 'ellipsis',
    position: 'absolute',
    bottom: '0',
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    opacity: '0.6',
    width: '100%',
    height: '10%',
    fontSize: '72px',
    fontWeight: '200',
    transition: '300ms',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.8'
    }
  },
 BannerGrid: {
    height: '100%',
    position: 'relative'
  },
  Caption: {
    marginTop: '10px',
    fontSize: '72px'
  },
  content: {
    marginTop: '52px',
    color: 'white',
    fontSize: '48px',
    border: '3px solid white',
    textTransform: 'capitalize',
    transition: '200ms',
    backgroundColor: 'tomato',
    height: '350px',
  }
})


function Banner(props) {

  const classes = useStyle();

  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className={classes.content}>
        <Typography className={classes.title}>{props.item.Name}</Typography>
        <Typography className={classes.Caption}>{props.item.Caption}</Typography>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name} >
        <Grid item className={classes.Media} title={item.Name} style={{ backgroundImage: "url(" + item.Image + ")" }}>
          <Typography className={classes.MediaCaption}>{item.Name}</Typography>
        </Grid >
      </Grid>
    );
    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className={classes.Banner}>
      <Grid container spacing={0} className={classes.BannerGrid}>
        {items}
      </Grid>
    </Card>
  );
}

const items = [
  {
    Name: "All of us loves all of you, and we'll take to you success",
    Image: "https://e7.pngegg.com/pngimages/295/235/png-clipart-tom-lee-music-vancouver-canadian-music-hall-of-fame-musical-instruments-musical-instruments-text-trademark.png",
    contentPosition: "left",
    Items: [
      {
        Name: "Suzuki",
        Image: "https://musicalcedar.com/wp-content/uploads/2020/03/suzuki.png"
      },
      {
        Name: "Ibanez",
        Image: "https://cdn.buenosybaratos.es/wp-content/uploads/2016/05/1.-Ibanez.png"
      }
    ]
  },
  {
    Name: "We equip your Band",
    Caption: "with the best Instruments!",
    contentPosition: "middle",
    Items: [
      {
        Name: "Lp",
        Image: "https://www.ecured.cu/images/6/61/Lp_logo.jpg"
      },
      {
        Name: "Fender",
        Image: "https://www.lafabricadebordados.es/1980-home_default/parche-bordado-fender.jpg"
      }
    ]
  },
  {
    Name: "Decoratives",
    Caption: "Give style and color to your studio Musica!",
    contentPosition: "right",
    Items: [
      {
        Name: "HRICANE",
        Image: "https://musicmakers.pro/wp-content/uploads/2020/07/marcas_0007_Capa-4.png"
      },
      {
        Name: "Marshall",
        Image: "https://images-na.ssl-images-amazon.com/images/G/33/img16/musical-instruments/icon/Marshall_BF_Logo_440x300._V281567280_.jpg"
      }
    ]
  }
];

class BannerExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: false,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true
    };

    autoBind(this);
  }

  toggleAutoPlay() {
    this.setState({
      autoPlay: !this.state.autoPlay
    });
  }

  toggleIndicators() {
    this.setState({
      indicators: !this.state.indicators
    });
  }

  toggleNavButtonsAlwaysVisible() {
    this.setState({
      navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
    });
  }

  toggleNavButtonsAlwaysInvisible() {
    this.setState({
      navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
    });
  }

  toggleCycleNavigation() {
    this.setState({
      cycleNavigation: !this.state.cycleNavigation
    });
  }

  changeAnimation(event) {
    this.setState({
      animation: event.target.value
    });
  }

  changeTimeout(event, value) {
    this.setState({
      timeout: value
    });
  }

  render() {
    return (
      <div style={{ marginTop: "50px", color: "#494949" }}>

        <Carousel
          className="Example"
          autoPlay={this.state.autoPlay}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          cycleNavigation={this.state.cycleNavigation}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
          navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
        /* next={(now, previous) =>
          console.log(
            `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
          )
        }
        prev={(now, previous) =>
          console.log(
            `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
          )
        }
        onChange={(now, previous) =>
          console.log(
            `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
          )
        } */
        >
          {items.map((item, index) => {
            return (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default BannerExample;