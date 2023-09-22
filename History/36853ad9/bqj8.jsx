import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div open={true}>sahith</div>
      <Modal />


    </>
  )
}

export default App
