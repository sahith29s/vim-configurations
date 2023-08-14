import React from 'react'
import useStore from "../store/store"


const App = () => {

  let {text} = useStore()

  return (
    <>
    <div className='text-center'>

    <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    </>
  )
}

export default App