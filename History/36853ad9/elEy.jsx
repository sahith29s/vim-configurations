import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './comonents/Modal'

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div open={true}>sahith</div>
      <button>Modal</button>
      {/* <Modal /> */}
    </>
  )
}

export default App
