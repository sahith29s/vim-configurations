import { useState } from 'react'
import './App.css'
import useStore from "../store/store"

function App() {

  const {text} = useStore()

  return (
    <>

    <textarea name="" id="" cols="30" rows="10"></textarea>
    


    </>
  )
}

export default App
