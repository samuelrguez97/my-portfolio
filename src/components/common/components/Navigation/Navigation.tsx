import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'

import { Grid } from '@material-ui/core'

import useStyles from './Navigation.styles'

const Navigation = (props: any) => {
    const classes = useStyles()
    const location = useLocation()

    const itemWidth = 150

    const navBorder = useRef(null) as any

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (navBorder && navBorder.current) {
            navBorder.current.style.left = `${current * itemWidth}px`
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

    return (
        <Grid container justify='space-around' className={classes.navContainer}>
            <Grid item className={`${classes.navItem} ${current === 0 && classes.navItemActive}`}>
                <Link to='/'>¿Quién soy?</Link>
            </Grid>
            <Grid item className={`${classes.navItem} ${current === 1 && classes.navItemActive}`}>
                <Link to='/about-me'>Sobre mí</Link>
            </Grid>
            <Grid item className={`${classes.navItem} ${current === 2 && classes.navItemActive}`}>
                <Link to='/technologies'>Tecnologías</Link>
            </Grid>
            <Grid item className={`${classes.navItem} ${current === 3 && classes.navItemActive}`}>
                <Link to='/contact'>Contacto</Link>
            </Grid>
            <div ref={navBorder} className={classes.navBorder}>
                <div className={classes.navBorderDash} />
            </div>
        </Grid>
    )
}

export default Navigation