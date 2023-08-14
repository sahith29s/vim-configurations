import { useState } from 'react'
import useStore from './store/store'

function App() {

const {courses , addCourse} = useStore()
  return (
    <>

    <div>Cources : {courses} </div>
    <button onClick={() =>{addCourse("this is me me ")}}></button>



    </>
  )
}

export default App
