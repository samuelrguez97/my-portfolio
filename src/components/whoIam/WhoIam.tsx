import React from 'react'
import { withRouter } from 'react-router-dom'

import { Grid, Typography } from '@material-ui/core'

import HomeImage from '../../assets/images/home_image.jpeg'

import useStyles from './WhoIam.styles'

const WhoIam = (props: any) => {
    const classes = useStyles()

    return (
        <Grid container justify='space-around'>
            <Grid item md={5} xs={11}>
                <Grid container className={classes.photoCard}>
                    <img src={HomeImage} className={classes.homeImg} alt='home-img' />
                </Grid>
            </Grid>
            <Grid item md={5} xs={11}>
                <Grid container className={classes.infoCard}>
                    <Grid item container spacing={2}>
                        <Grid item className={classes.title}>
                            ¿Quién soy?
                        </Grid>
                        <Grid item className={classes.text}>
                            !Buenas!, si has llegado hasta aqui significa que estas buscando algo de infromación sobre mi.
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withRouter(WhoIam)