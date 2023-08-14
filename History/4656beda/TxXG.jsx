import { useState } from 'react'
import useStore from "./store/store"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const {counter} = useStore()

  return (
    <>

      <div className="">
        {counter}

      </div>

    </>
  )
}

export default App
