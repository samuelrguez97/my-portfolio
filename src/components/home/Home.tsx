import * as React from 'react'

import { Grid, Typography } from '@material-ui/core'

import useStyles from './Home.styles'

const Home = (props: any) => {
    const classes = useStyles()

    return (
        <Grid container>
            <Typography>Home</Typography>
        </Grid>
    )
}

export default Home