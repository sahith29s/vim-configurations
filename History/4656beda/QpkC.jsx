import { useState } from 'react'
import useStore from "./store/store"

function App() {

  const {text, setText} = useStore()



  const handClick= (text) =>{
    navigator.clipboard.writeText(text)
  };

  return (
    
    
    <>
    <div className="content">{text}</div>
    <button onClick={() => handClick(text)} className="">button </button>
    </>
  )
}

export default App
