import React from 'react'
import { withRouter } from 'react-router'

import { Grid, Typography } from '@material-ui/core'

import useStyles from './Contact.styles'

const Contact = (props: any) => {
    const classes = useStyles()

    return (
        <Grid container>
            <Typography>Contact</Typography>
        </Grid>
    )
}

export default withRouter(Contact)