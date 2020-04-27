import React from 'react'
import './App.css'
import LandingPage from './components/landing-page/LandingPage'
import Header from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default App;
