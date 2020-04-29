import * as React from 'react'
import { Grid } from '@material-ui/core'

import useStyles from './Footer.styles'

const Footer = (props: any) => {
    const classes = useStyles()

    return (
        <Grid container justify='center' className={classes.footerBlock}>
            <Grid item md={6}>
                <Grid container className={classes.footerContainer}>
                    Footer
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer