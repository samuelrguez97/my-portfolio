import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'

import Header from './components/common/components/Header/Header'
import Footer from './components/common/components/Footer/Footer'

import routes from './components/common/router/RouterRutes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          {
            routes.map(route => (
              <Route path={route.path} component={route.component} />
            ))
          }
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
