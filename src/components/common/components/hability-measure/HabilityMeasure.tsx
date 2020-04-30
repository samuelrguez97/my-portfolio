import React, { useEffect } from 'react'

import { Grid } from '@material-ui/core'

import useStyles from './HabilityMeasure.styles'

const HabilityMeasure = (props: any) => {
    const classes = useStyles()

    const {
        range
    } = props

    const nRange = parseInt(range)

    return (
        <Grid container className={classes.habilityContainer}>
            <Grid item className={`${classes.habilityBox} ${nRange >= 1 && classes.active}`} />
            <Grid item className={`${classes.habilityBox} ${nRange >= 2 && classes.active}`} />
            <Grid item className={`${classes.habilityBox} ${nRange >= 3 && classes.active}`} />
            <Grid item className={`${classes.habilityBox} ${nRange >= 4 && classes.active}`} />
            <Grid item className={`${classes.habilityBox} ${nRange >= 5 && classes.active}`} />
        </Grid>
    )
}

export default HabilityMeasure