import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'

import { Grid } from '@material-ui/core'

import Header from './components/common/components/Header/Header'
import Footer from './components/common/components/Footer/Footer'

import routes from './components/common/router/RouterRutes'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Grid container className='web-block'>
          <Switch>
            {
              routes.map(route => (
                <Route exact path={route.path} component={route.component} />
              ))
            }
          </Switch>
        </Grid>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
