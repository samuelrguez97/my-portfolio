import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import './App.css'

import WebContainer from './components/common/components/web-container/WebContainer'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <WebContainer />
      </BrowserRouter>
    </div>
  )
}

export default App
