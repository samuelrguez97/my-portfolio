import React, { useState, useEffect, useRef } from "react";

import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import LogoImage from "../../../../assets/images/logo.jpeg";

import Navigation from "../navigation/Navigation";

import useStyles from "./Header.styles";
import NavigationMobile from "../navigation-mobile/NavigationMobile";
import MenuMobile from "../menu-mobile/MenuMobile";

const Header = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();

  const { setScrolled } = props;

  const tablet = useMediaQuery(theme.breakpoints.only("sm"));
  const mobile = useMediaQuery(theme.breakpoints.only("xs"));

  const menuRef = useRef(null) as any;
  const menuHamburgerRef = useRef(null) as any;

  const [firstChargeMenu, setFirstChargeMenu] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [positionSticky, setPositionSticky] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  const handleMobileMenu = () => {
    !firstChargeMenu && setFirstChargeMenu(true);
    setShowMenuMobile(!showMenuMobile);
  };

  const handleScroll = () => {
    const scrolled = window.pageYOffset > menuRef.current.offsetTop;
    if (menuRef.current) {
      setPositionSticky(scrolled);
      setScrolled(scrolled);
    }
  };

  return (
    <Grid
      container
      justify="center"
      className={`${classes.block} ${positionSticky && classes.sticky}`}
      ref={menuRef}
    >
      <Grid xs={12} sm={12} md={12} lg={9} className={classes.root}>
        {firstChargeMenu && (tablet || mobile) && (
          <MenuMobile
            isOpen={showMenuMobile}
            setShowMenuMobile={setShowMenuMobile}
            menuHamburgerRef={menuHamburgerRef}
          />
        )}
        <Grid item className={classes.menu}>
          <Grid
            container
            justify="space-around"
            alignItems="center"
            className={classes.pageInfo}
          >
            <Grid item>
              <img src={LogoImage} className={classes.logoImg} alt="logo-img" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.navMenu}>
          {tablet || mobile ? (
            <Grid container>
              <NavigationMobile
                handleMobileMenu={handleMobileMenu}
                menuHamburgerRef={menuHamburgerRef}
              />
            </Grid>
          ) : (
            <Grid container>
              <Navigation />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
