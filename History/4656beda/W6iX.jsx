import { useState } from 'react'
import useStore from "./store/store"

function App() {

  const {text, setText} = useStore()
  
  

  const handleClick = (text) =>{
    navigator.clipboard.writeText(text)
  };

  return (
    
    
    <>
    <button onClick={() => handleClick(text)} className="">{text}</button>
    </>
  )
}

export default App
