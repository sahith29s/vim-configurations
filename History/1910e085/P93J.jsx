import { useState } from 'react'
import Websocket from './components/Websocket'
import io from "socket.io-client"

const socket = io.connect("http://localhost:5000")

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const sendMessage = () =>{
  };

  
  return (
    <>
    
    <input placeholder='Message...' type="text" />
    <button>Send Message</button>

    </>
  )
}

export default App
