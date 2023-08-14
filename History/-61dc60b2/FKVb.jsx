import React from 'react'
import useStore from "../store/store"
import "../public/output.css"
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'


const App = () => {
  let { text } = useStore()

  return (
    <>

      <Navbar />
      <TextArea/>


    </>
  )
}

export default App