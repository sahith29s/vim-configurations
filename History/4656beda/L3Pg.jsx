import { useState } from 'react'
import useStore from "./store/store"

function App() {

  const {text, setText} = useStore()



  let textFor = "this is me in vim "
  
  handClick = (text) => {
    // textField.select()
    // document.execCommand('copy')
    // textField.remove()
  }

  return (
    
    
    <>
    <div className="content">{text}</div>
    <button onClick={() => handClick(loda)} className="">button </button>
    </>
  )
}

export default App
