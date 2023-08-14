import { useState } from 'react'
import useStore from './store/store'

function App() {

const {courses , addCourse} = useStore()
  return (
    <>

    <div>Cources : {courses} </div>
    <button onClick={() => addCourse("This is me in vim")}>button </button>



    </>
  )
}

export default App
