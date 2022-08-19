import { useState } from 'react'

import { Navbar , Hero, Features, Howwork, Reviews, Getaccess, Footer } from './components'

import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Howwork/>
    <Reviews/>
    <Getaccess/>
    <Footer/>
    </>
  )
}

export default App
