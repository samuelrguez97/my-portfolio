import React, { useEffect, useRef, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { Grid } from '@material-ui/core'

import useStyles from './MenuMobile.styles'

const MenuMobile = (props: any) => {
    const classes = useStyles()
    const location = useLocation()

    const {
        isOpen,
        menuHamburgerRef,
        setShowMenuMobile
    } = props

    const menuRef = useRef(null) as any
    const navBorder = useRef(null) as any

    const itemHeight = 60

    const [current, setCurrent] = useState(0)

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && menuHamburgerRef.current && !menuHamburgerRef.current.contains(event.target)) {
            setShowMenuMobile(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [menuRef])

    useEffect(() => {
        if (navBorder && navBorder.current) {
            navBorder.current.style.top = `${current * itemHeight}px`
        }
    }, [navBorder, current])

    useEffect(() => {
        if (location.pathname === '/') {
            setCurrent(0)
        } else if (location.pathname === '/about-me') {
            setCurrent(1)
        } else if (location.pathname === '/technologies') {
            setCurrent(2)
        } else if (location.pathname === '/contact') {
            setCurrent(3)
        }
    }, [location.pathname])

    const hideMenu = () => {
        setShowMenuMobile(false)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Grid
            ref={menuRef}
            container
            className={`${classes.menuContainer} ${isOpen ? classes.slideIn : classes.slideOut}`}
        >
            <Grid container justify='center' className={classes.navContainer}>
                <Grid item xs={10} className={`${classes.navItem} ${current === 0 && classes.navItemActive}`}>
                    <Grid container alignItems='center' className={classes.navItemContainer}>
                        <Grid item>
                            <Link onClick={() => setTimeout(hideMenu, 375)} to='/'>¿Quién soy?</Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} className={`${classes.navItem} ${current === 1 && classes.navItemActive}`}>

                    <Grid container alignItems='center' className={classes.navItemContainer}>
                        <Grid item>
                            <Link onClick={() => setTimeout(hideMenu, 375)} to='/about-me'>Sobre mí</Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} className={`${classes.navItem} ${current === 2 && classes.navItemActive}`}>
                    <Grid container alignItems='center' className={classes.navItemContainer}>
                        <Grid item>
                            <Link onClick={() => setTimeout(hideMenu, 375)} to='/technologies'>Tecnologías</Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} className={`${classes.navItem} ${current === 3 && classes.navItemActive}`}>
                    <Grid container alignItems='center' className={classes.navItemContainer}>
                        <Grid item>
                            <Link onClick={() => setTimeout(hideMenu, 375)} to='/contact'>Contacto</Link>
                        </Grid>
                    </Grid>
                </Grid>
                <div ref={navBorder} className={classes.navBorder}>
                    <div className={classes.navBorderDash} />
                </div>
            </Grid>
        </Grid>
    )
}

export default MenuMobile