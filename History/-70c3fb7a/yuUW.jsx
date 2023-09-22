import { useState } from 'react'

import { decrement, increment } from "./store/counterSlice"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      {count}

      <button
        onClick={() => dispatch(increment())}
      >shaith</button>

      {

      }

    </>
  )
}

export default App
