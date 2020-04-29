import * as React from 'react'

import { Grid, Typography } from '@material-ui/core'

import LogoImage from '../../../../assets/images/logo.jpeg'

import Navigation from '../Navigation/Navigation'

import useStyles from './Header.styles'

const Header = (props: any) => {
    const classes = useStyles()

    return (
        <Grid
            container
            alignItems='center'
            className={classes.block}
        >
            <Grid item className={classes.menu}>
                <Grid
                    container
                    justify='space-around'
                    alignItems='center'
                    className={classes.pageInfo}
                >
                    <Grid item>
                        <img src={LogoImage} className={classes.logoImg} alt='logo-img' />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.navigation}>
                <Grid container>
                    <Navigation />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header