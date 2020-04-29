import React from 'react'
import { withRouter } from 'react-router-dom'

import { Grid, Typography } from '@material-ui/core'

import HomeImage from '../../assets/images/home_image.jpeg'

import useStyles from './Home.styles'

const Home = (props: any) => {
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ullam, alias fuga autem consequuntur aliquam ad voluptate eveniet et minima eius, tempora quod voluptas! Corrupti incidunt sit nihil porro temporibus!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore autem at similique harum voluptate officia dolores nostrum distinctio, quasi, quam asperiores enim rem sit adipisci consectetur a libero voluptates quia.
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withRouter(Home)