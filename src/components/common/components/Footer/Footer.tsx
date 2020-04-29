import * as React from 'react'
import { Grid } from '@material-ui/core'

import useStyles from './Footer.styles'

const Footer = (props: any) => {
    const classes = useStyles()

    return (
        <Grid container justify='center' className={classes.footerBlock}>
            <Grid item md={6}>
                <Grid container justify='space-around' spacing={2} className={classes.footerContainer}>
                    <Grid item md='auto' sm={12} xs={12}>
                        Samuel Rodríguez Aguilar
                    </Grid>
                    <Grid item md='auto' sm={12} xs={12}>
                        2020
                    </Grid>
                    <Grid item md='auto' sm={12} xs={12}>
                        samuelrguez97@gmail.com
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer