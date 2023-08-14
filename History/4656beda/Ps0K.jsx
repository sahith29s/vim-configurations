import { useState } from 'react'
import useStore from "./store/store"

function App() {

  const {text, setText} = useStore()
  
  

  const handleClick = () =>{
    navigator.clipboard.writeText("sahith")
  };

  return (
    
    
    <>
    <button onClick={handleClick} className="">text</button>
    </>
  )
}

export default App
