import * as React from 'react'

import { Grid, Typography } from '@material-ui/core'

import useStyles from './AboutMe.styles'

const AboutMe = (props: any) => {
    const classes = useStyles()

    return (
        <Grid container>
            <Typography>AboutMe</Typography>
        </Grid>
    )
}

export default AboutMe