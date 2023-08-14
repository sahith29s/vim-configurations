import { useeffect, usestate } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import Services from './components/Services'
import { useParams } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Navbar />} />
        <Route path="/about"  element={<About/>}/>
        <Route path="/services"  element={<Services/>} />
      </Routes>
    </>
  )
}

export default App
