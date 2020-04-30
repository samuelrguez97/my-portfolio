import React, { useRef, useEffect } from 'react'

import { withRouter, Route, Switch, useLocation } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import { Grid } from '@material-ui/core'

import routes from '../../router/RouterRutes'

import useStyles from './WebContainer.styles'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const WebContainer = (props: any) => {
    const classes = useStyles()
    const location = useLocation()

    const webAppBlock = useRef(null) as any
    const webAppContainer = useRef(null) as any

    useEffect(() => {
        if (webAppBlock && webAppBlock.current && webAppContainer && webAppContainer.current) {
            const currentContainer = webAppContainer.current
            const computedContainerHeight = window.getComputedStyle(currentContainer).getPropertyValue('height')
            webAppBlock.current.style.height = computedContainerHeight
        }
    }, [webAppBlock, webAppContainer, window.onresize, location])

    return (
        <div className={classes.container}>
            <Header />
            <Grid container justify='center' className={classes.webBlock} ref={webAppBlock}>
                <Grid item lg={8} md={11} sm={11} xs={11} ref={webAppContainer}>
                    <Switch>
                        {
                            routes.map(route => (
                                <Route exact path={route.path} component={route.component} />
                            ))
                        }
                    </Switch>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default withRouter(WebContainer)