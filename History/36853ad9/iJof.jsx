import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [openModal, setOpenModal ] = useState(0)

  return (
    <>
      <Modal />
    </>
  )
}

export default App
