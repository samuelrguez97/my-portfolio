import * as React from 'react'

import { Grid, Typography } from '@material-ui/core'

import useStyles from './Faqs.styles'

const Faqs = (props: any) => {
    const classes = useStyles()

    return (
        <Grid container>
            <Typography>Faqs</Typography>
        </Grid>
    )
}

export default Faqs