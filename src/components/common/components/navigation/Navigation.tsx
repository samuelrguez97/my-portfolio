import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import { Grid } from "@material-ui/core";

import useStyles from "./Navigation.styles";

const Navigation = (props: any) => {
  const classes = useStyles();
  const location = useLocation();

  const itemWidth = 166;

  const navBorder = useRef(null) as any;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (navBorder && navBorder.current) {
      navBorder.current.style.left = `${current * itemWidth}px`;
    }
  }, [navBorder, current]);

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrent(0);
    } else if (location.pathname === "/about-me") {
      setCurrent(1);
    } else if (location.pathname === "/technologies") {
      setCurrent(2);
    } else if (location.pathname === "/contact") {
      setCurrent(3);
    }
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Grid
      container
      justify="space-around"
      spacing={2}
      className={classes.navContainer}
    >
      <Grid item className={classes.navLink}>
        <Link onClick={scrollToTop} to="/">
          <Grid
            item
            className={`${classes.navItem} ${
              current === 0 && classes.navItemActive
            }`}
          >
            ¿Quién soy?
          </Grid>
        </Link>
      </Grid>

      <Grid item className={classes.navLink}>
        <Link onClick={scrollToTop} to="/about-me">
          <Grid
            item
            className={`${classes.navItem} ${
              current === 1 && classes.navItemActive
            }`}
          >
            Sobre mí
          </Grid>
        </Link>
      </Grid>

      <Grid item className={classes.navLink}>
        <Link onClick={scrollToTop} to="/technologies">
          <Grid
            item
            className={`${classes.navItem} ${
              current === 2 && classes.navItemActive
            }`}
          >
            Tecnologías
          </Grid>
        </Link>
      </Grid>

      <Grid item className={classes.navLink}>
        <Link onClick={scrollToTop} to="/contact">
          <Grid
            item
            className={`${classes.navItem} ${
              current === 3 && classes.navItemActive
            }`}
          >
            Contacto
          </Grid>
        </Link>
      </Grid>

      <div ref={navBorder} className={classes.navBorder}>
        <div className={classes.navBorderDash} />
      </div>
    </Grid>
  );
};

export default Navigation;
