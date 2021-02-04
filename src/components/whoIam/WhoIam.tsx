import React from "react";
import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core";

import HomeImage from "../../assets/images/home_image.jpeg";

import useStyles from "./WhoIam.styles";

const WhoIam = (props: any) => {
  const classes = useStyles();

  return (
    <Grid
      container
      md={12}
      className={classes.container}
      justify="space-around"
    >
      <Grid container item md={5} xs={11}>
        <Grid item container className={classes.infoCard} spacing={2}>
          <Grid item className={classes.title}>
            ¿Quién soy?
          </Grid>
          <Grid item className={classes.text}>
            !Buenas!, si has llegado hasta aqui significa que estas buscando
            algo de información sobre mi, lo cierto es que soy un chico
            apasionado por el desarrollo web y todo el ecosistema que engloba
            este mundo.
          </Grid>
        </Grid>
        <Grid item container className={classes.infoCard} spacing={2}>
          <Grid item className={classes.title}>
            ¿Porque desarrollo web?
          </Grid>
          <Grid item className={classes.text}>
            Habiendo tantas ramas en el mundo del desarrollo de software es casi
            imposible decantarte por una si tu vocación es la programación, sin
            embargo, tanto por las salidas profesionales como las distintas
            tecnologías y diseños de páginas que tanto me llamaban atención de
            pequeño me acabé decantando por esta modalidad profesional.
          </Grid>
        </Grid>
      </Grid>
      <Grid container item md={5} sm={11} xs={11}>
        <Grid container className={classes.photoCard} spacing={2}>
          <Grid item>
            <img src={HomeImage} className={classes.homeImg} alt="home-img" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(WhoIam);
