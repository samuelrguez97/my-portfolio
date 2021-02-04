import React, { useState } from "react";

import { withRouter, Route, Switch } from "react-router-dom";

import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import routes from "../../router/RouterRutes";

import useStyles from "./WebContainer.styles";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const WebContainer = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [scrolled, setScrolled] = useState(false);

  return (
    <div className={classes.container}>
      <Grid
        className={`${classes.webHeader} ${
          scrolled
            ? mobile
              ? classes.scrolledMobile
              : classes.scrolledDesktop
            : ""
        }`}
      >
        <Header setScrolled={setScrolled} />
      </Grid>
      <Grid container justify="center" className={classes.webBlock}>
        <Grid item lg={8} md={11} sm={11} xs={11}>
          <Switch>
            {routes.map((route) => (
              <Route exact path={route.path} component={route.component} />
            ))}
          </Switch>
        </Grid>
      </Grid>
      <Grid className={classes.webFooter}>
        <Footer />
      </Grid>
    </div>
  );
};

export default withRouter(WebContainer);
