import React from "react";

import { withRouter, Route, Switch, useLocation } from "react-router-dom";

import { Grid } from "@material-ui/core";

import routes from "../../router/RouterRutes";

import useStyles from "./WebContainer.styles";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const WebContainer = (props: any) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.container}>
      <Header />
      <Grid container justify="center" className={classes.webBlock}>
        <Grid
          item
          lg={8}
          md={11}
          sm={11}
          xs={11}
          className={classes.webContainer}
        >
          <Switch>
            {routes.map((route) => (
              <Route exact path={route.path} component={route.component} />
            ))}
          </Switch>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default withRouter(WebContainer);
