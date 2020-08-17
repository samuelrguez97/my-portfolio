import React, { useState, useRef } from 'react'

import { Grid } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import LogoImage from '../../../../assets/images/logo.jpeg'

import Navigation from '../navigation/Navigation'

import useStyles from './Header.styles'
import NavigationMobile from '../navigation-mobile/NavigationMobile'
import MenuMobile from '../menu-mobile/MenuMobile'

const Header = (props: any) => {
    const classes = useStyles()
    const theme = useTheme()

    const tablet = useMediaQuery(theme.breakpoints.only('sm'))
    const mobile = useMediaQuery(theme.breakpoints.only('xs'))

    const menuHamburgerRef = useRef(null) as any

    const [firstChargeMenu, setFirstChargeMenu] = useState(false)
    const [showMenuMobile, setShowMenuMobile] = useState(false)

    const handleMobileMenu = () => {
        !firstChargeMenu && setFirstChargeMenu(true)
        setShowMenuMobile(!showMenuMobile)
    }

    return (
        <Grid
            container
            alignItems='center'
            className={classes.block}
        >
            {
                firstChargeMenu &&
                <MenuMobile isOpen={showMenuMobile} setShowMenuMobile={setShowMenuMobile} menuHamburgerRef={menuHamburgerRef} />
            }
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
            <Grid item className={classes.navMenu}>
                {
                    (tablet || mobile) ?
                        <Grid container>
                            <NavigationMobile handleMobileMenu={handleMobileMenu} menuHamburgerRef={menuHamburgerRef} />
                        </Grid>
                        :
                        <Grid container>
                            <Navigation />
                        </Grid>
                }
            </Grid>
        </Grid>
    )
}

export default Header