import React from 'react'
import useStore from "../store/store"
import "../public/output.css"


const App = () => {
  let { text } = useStore()

  return (
    <>

    <div className="bg-red-700">ksdf</div>

    </>
  )
}

export default App