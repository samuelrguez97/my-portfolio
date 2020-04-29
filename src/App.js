import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import './App.css'

import Header from './components/common/components/header/Header'
import WebContainer from './components/common/components/web-container/WebContainer'
import Footer from './components/common/components/footer/Footer'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <WebContainer />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
