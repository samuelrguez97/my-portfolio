import React from 'react'

import { Grid } from '@material-ui/core'

import useStyles from './HabilityMeasure.styles'

const HabilityMeasure = (props: any) => {
    const classes = useStyles()

    return (
        <Grid container>
            <Grid item className={classes.habilityBox} />
            <Grid item className={classes.habilityBox} />
            <Grid item className={classes.habilityBox} />
            <Grid item className={classes.habilityBox} />
            <Grid item className={classes.habilityBox} />
        </Grid>
    )
}

export default HabilityMeasure