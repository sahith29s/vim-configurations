import React from 'react'
import useStore from "../store/store"


const App = () => {

  let {text} = useStore()

  return (
    <>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    </>
  )
}

export default App