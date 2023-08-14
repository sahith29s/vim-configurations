import React from 'react'
import useStore from "../store/store"
import "../public/output.css"
import Navbar from './components/Navbar'


const App = () => {
  let { text } = useStore()

  return (
    <>

      <Navbar />
      < TextArea/>
      

    </>
  )
}

export default App