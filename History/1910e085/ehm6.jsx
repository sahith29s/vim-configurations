import { useState } from 'react'
import WebSocketComponent from './components/Websocket'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WebSocketComponent />

    </>
  )
}

export default App
