import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './comonents/Modal'

function App() {
  const [, setCount] = useState(0)

  return (
    <>
      <button>Modal</button>
      <Modal/>
    </>
  )
}

export default App
