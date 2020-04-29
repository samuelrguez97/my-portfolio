import React from 'react'

import { withRouter, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import { Grid } from '@material-ui/core'

import routes from '../../router/RouterRutes'

import useStyles from './WebContainer.styles'

const WebContainer = (props: any) => {
    const classes = useStyles()

    return (
        <Grid container justify='center' className={classes.webBlock}>
            <Grid item md={8} sm={10} xs={11}>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className={classes.switchWrapper}
                >
                    {
                        routes.map(route => (
                            <Route exact path={route.path} component={route.component} />
                        ))
                    }
                </AnimatedSwitch>
            </Grid>
        </Grid>
    )
}

export default withRouter(WebContainer)