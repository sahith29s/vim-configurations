import { useState } from 'react'
import useStore from "./store/store"

function App() {

  const {text, setText} = useStore()
  
  

  let forText = "loda"
  const handleClick = (forText) =>{
    setText("fuck you bitch")
    
  };

  return (
    
    
    <>
    <button onClick={() => handleClick("sahikth")} className="">{text}</button>
    </>
  )
}

export default App
