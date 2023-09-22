import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  const todos = useSelector((state) => state.todo.todo)
  return (
    <>
      sahith
    </>
  )
}

export default App
