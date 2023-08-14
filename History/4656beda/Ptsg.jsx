import { useState } from 'react'
import useStore from "./store/store"

function App() {

  const {text, setText} = useStore()
  
  
  

  return (
    
    
    <>
    <div className="content">{text}</div>
    <button onClick={() => handClick(loda)} className="">button </button>
    </>
  )
}

export default App
