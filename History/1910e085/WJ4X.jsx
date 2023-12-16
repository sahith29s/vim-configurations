import { useState } from 'react'
import io from "socket.io-client"

const socket = io.connect("http://localhost:5000")
console.log(socket);

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const sendMessage = () =>{
    socket.emit("mes" , "mess")
  };


  return (
    <>
    
    <input placeholder='Message...' type="text" />
    <button onClick={sendMessage}>Send Message</button>

    </>
  )
}

export default App
