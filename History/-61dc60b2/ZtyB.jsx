import React from 'react'
import useStore from "../store/store"
import "./index.css"


const App = () => {

  let {text} = useStore()

  return (
    <>
    <div className='bg-red-700'>
      sahith
    </div>
    </>
  )
}

export default App