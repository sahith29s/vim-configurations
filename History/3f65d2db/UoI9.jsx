import { useeffect, usestate } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" render={<Navbar />} />
        <Route path="/about" render={<About/>}/>
        <Route path="/services" render={<Services/>} />
      </Routes>
    </>
  )
}

export default App
