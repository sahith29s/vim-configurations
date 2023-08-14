import { useState } from 'react'
import useStore from './store/store'

function App() {

  const { coruses } = useStore()
  return (
    <>

      <div>Courses :{courses} </div>

    </>
  )
}

export default App
