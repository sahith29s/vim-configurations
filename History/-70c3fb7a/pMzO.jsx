import { useState } from 'react'

import { decrement, increment } from "./store/counterSlice"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const count = useSelector(state => state.counter.value)
  const objectSlice = useSelector(state => state.object)
  const dispatch = useDispatch()
  return (
    <>
      {count}

      <button
        onClick={() => dispatch(increment())}
      >shaith</button>

      {
        objectSlice
      }

    </>
  )
}

export default App
