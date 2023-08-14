import { useState } from 'react'
import useStore from "./store/store"

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
