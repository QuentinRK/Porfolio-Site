import './index.css';
import React from 'react'
import Header from './components/Header.js'
import Home from './components/Home.js'
import Footer from './components/Footer.js'

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
