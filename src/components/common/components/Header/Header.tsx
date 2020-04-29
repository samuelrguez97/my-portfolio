import * as React from 'react'

import { Grid, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import useStyles from './Header.styles'
import Navigation from '../Navigation/Navigation'

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
                        <MenuIcon fontSize='large' />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.title}>Mi portafolio</Typography>
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