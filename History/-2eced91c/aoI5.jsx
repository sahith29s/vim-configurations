import { useState } from 'react'
import useStore from './store/store'

function App() {

const {cources} = useStore()
  return (
    <>

{cources}


    </>
  )
}

export default App
