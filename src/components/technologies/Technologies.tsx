import React from 'react'
import { withRouter } from 'react-router'

import { Grid, Typography } from '@material-ui/core'

import useStyles from './Technologies.styles'


const Technologies = (props: any) => {
    const classes = useStyles()

    return (
        <Grid container>
            <Typography>Technologies</Typography>
        </Grid>
    )
}

export default withRouter(Technologies)