import { useState } from 'react'
import Websocket from './components/Websocket'
import io from "socket.io-client"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <input placeholder='Message...' type="text" />
    <button>Send Message</button>

    </>
  )
}

export default App
