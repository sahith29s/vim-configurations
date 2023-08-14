import { useState } from 'react'
import useStore from "./store/store"

function App() {

  const {text, setText} = useStore()



  const handClick= () =>{

  };

  return (
    
    
    <>
    <div value={text} className="content">This is content</div>
    <button onClick={() => handClick(text)} className="">button </button>
    </>
  )
}

export default App
