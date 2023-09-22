import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import { bool } from 'prop-types'

function App() {
  const [openModal, setOpenModal ] = useState(false)<bool

  return (
    <>
    <button className="" onClick={() => setOpenModal(!openModal)}>Sahith</button>
      <Modal open={openModal} />
    </>
  )
}

export default App
