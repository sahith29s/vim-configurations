import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [openModal, setOpenModal ] = useState(false)

  return (
    <>
      <Modal open={openModal} />
    </>
  )
}

export default App
