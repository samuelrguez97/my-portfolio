import React, { useEffect, useRef, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { Grid } from "@material-ui/core";

import useStyles from "./MenuMobile.styles";

const MenuMobile = (props: any) => {
  const classes = useStyles();
  const location = useLocation();

  const { isOpen, menuHamburgerRef, setShowMenuMobile } = props;

  const menuRef = useRef(null) as any;
  const navBorder = useRef(null) as any;

  const itemHeight = 60;

  const [current, setCurrent] = useState(0);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      menuHamburgerRef.current &&
      !menuHamburgerRef.current.contains(event.target)
    ) {
      setShowMenuMobile(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    if (navBorder && navBorder.current) {
      navBorder.current.style.top = `${current * itemHeight}px`;
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

  const hideMenu = () => {
    setShowMenuMobile(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Grid
      ref={menuRef}
      container
      className={`${classes.menuContainer} ${
        isOpen ? classes.slideIn : classes.slideOut
      }`}
    >
      <Grid container justify="center" className={classes.navContainer}>
        <Grid item className={classes.navLink}>
          <Link onClick={() => setTimeout(hideMenu, 375)} to="/">
            <Grid
              item
              xs={11}
              className={`${classes.navItem} ${
                current === 0 && classes.navItemActive
              }`}
            >
              <Grid
                container
                alignItems="center"
                className={classes.navItemContainer}
              >
                ¿Quién soy?
              </Grid>
            </Grid>
          </Link>
        </Grid>

        <Grid item className={classes.navLink}>
          <Link onClick={() => setTimeout(hideMenu, 375)} to="/about-me">
            <Grid
              item
              xs={11}
              className={`${classes.navItem} ${
                current === 1 && classes.navItemActive
              }`}
            >
              <Grid
                container
                alignItems="center"
                className={classes.navItemContainer}
              >
                Sobre mí
              </Grid>
            </Grid>
          </Link>
        </Grid>

        <Grid item className={classes.navLink}>
          <Link onClick={() => setTimeout(hideMenu, 375)} to="/technologies">
            <Grid
              item
              xs={11}
              className={`${classes.navItem} ${
                current === 2 && classes.navItemActive
              }`}
            >
              <Grid
                container
                alignItems="center"
                className={classes.navItemContainer}
              >
                Tecnologías
              </Grid>
            </Grid>
          </Link>
        </Grid>

        <Grid item className={classes.navLink}>
          <Link onClick={() => setTimeout(hideMenu, 375)} to="/contact">
            <Grid
              item
              xs={11}
              className={`${classes.navItem} ${
                current === 3 && classes.navItemActive
              }`}
            >
              <Grid
                container
                alignItems="center"
                className={classes.navItemContainer}
              >
                Contacto
              </Grid>
            </Grid>
          </Link>
        </Grid>

        <div ref={navBorder} className={classes.navBorder}>
          <div className={classes.navBorderDash} />
        </div>
      </Grid>
    </Grid>
  );
};

export default MenuMobile;
