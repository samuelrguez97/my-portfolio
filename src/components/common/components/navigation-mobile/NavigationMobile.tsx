import React from 'react'

import { Grid } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

import useStyles from './NavigationMobile.styles'

const NavigationMobile = (props: any) => {
    const classes = useStyles()

    const {
        handleMobileMenu,
        menuHamburgerRef
    } = props

    return (
        <Grid container justify='flex-end'>
            <Grid ref={menuHamburgerRef} item className={classes.menuHamburguer}>
                <Menu style={{ color: '#5656ef' }} fontSize='large' onClick={handleMobileMenu} />
            </Grid>
        </Grid>
    )
}

export default NavigationMobile