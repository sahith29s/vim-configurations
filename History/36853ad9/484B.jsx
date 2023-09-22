import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [openModal, setOpenModal ] = useState(false)

  return (
    <>
    <button className="" onClick={() => setOpenModal(!openModal)}>Sahith</button>
      <Modal open={openModal} />
    </>
  )
}

export default App
