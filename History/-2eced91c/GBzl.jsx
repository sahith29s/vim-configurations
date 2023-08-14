import { useState } from 'react'
import useStore from './store/store'

function App() {

  const { coruses } = useStore()
  return (
    <>
  <div>{coruses}</div>

    </>
  )
}

export default App
