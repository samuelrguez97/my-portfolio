import React from 'react'
import { Grid } from '@material-ui/core'

import LogoImage from '../../../../assets/images/logo.jpeg'

import useStyles from './Footer.styles'

const Footer = (props: any) => {
    const classes = useStyles()

    return (
        <Grid container justify='center' className={classes.footerBlock}>
            <Grid item lg={6} md={8} sm={10} xs={12}>
                <Grid container justify='space-around' alignItems='center' className={classes.footerContainer}>
                    <Grid item md='auto' sm={12} xs={12} className={classes.footerItem}>
                        Samuel Rodríguez Aguilar 2020
                    </Grid>
                    <Grid item md='auto' sm={12} xs={12} className={classes.footerItem}>
                        <img src={LogoImage} className={classes.logoImg} alt='logo-img' />
                    </Grid>
                    <Grid item md='auto' sm={12} xs={12} className={classes.footerItem}>
                        samuelrguez97@gmail.com
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer