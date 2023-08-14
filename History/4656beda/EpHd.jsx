import { useState } from 'react'
import useStore from "./store/store"

function App() {

  const { counter, increaseCounter } = useStore()
    const handleClick = () =>{



    };
  

  return (
    
    
    <>
    <div onChange={() =>} className="content">This is content</div>
    <button onClick={handleClick} className="">button </button>
    </>
  )
}

export default App
