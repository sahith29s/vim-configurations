import { useState } from 'react'
import { decrement , increment} from "./store/counterSlice"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const count = useSelector(state => state.counter.value)
  const dis
  return (
    <>
    {count}

    </>
  )
}

export default App
