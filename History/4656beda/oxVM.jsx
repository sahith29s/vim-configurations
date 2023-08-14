import { useState } from 'react'
import useStore from "./store/store"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const { counter, increaseCounter } = useStore()


  return (
    <>
      <div className="">
        {counter}
        <button onClick={increaseCounter}>button </button>
      </div>
    </>
  )
}

export default App
