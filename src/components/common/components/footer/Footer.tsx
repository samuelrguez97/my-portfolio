import React from "react";
import { Grid } from "@material-ui/core";

import MailOutlineIcon from "@material-ui/icons/MailOutline";

import LogoImage from "../../../../assets/images/logo.jpeg";

import useStyles from "./Footer.styles";

const Footer = (props: any) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.footerBlock}>
      <Grid item lg={6} md={10} sm={10} xs={12}>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.footerContainer}
        >
          <Grid
            item
            container
            md={4}
            sm={12}
            xs={12}
            className={classes.footerItem}
            justify="center"
          >
            <Grid item alignItems="center">
              Samuel Rodríguez Aguilar - 2020
            </Grid>
          </Grid>
          <Grid
            item
            container
            md={4}
            sm={12}
            xs={12}
            className={classes.footerItem}
            justify="center"
          >
            <Grid item alignItems="center">
              <img src={LogoImage} className={classes.logoImg} alt="logo-img" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            md={4}
            sm={12}
            xs={12}
            className={classes.footerItem}
            justify="center"
          >
            <Grid item alignItems="center" className={classes.mailBlock}>
              <MailOutlineIcon></MailOutlineIcon>
              <div className={classes.mailText}>samuelrguez97@gmail.com</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
