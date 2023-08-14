import { useState } from 'react'
import useStore from './store/store'

function App() {

const {courses , addCourse , removeCourse} = useStore()
  return (
    <>


    <div>Cources : {... courses} </div>
    <button onClick={() => addCourse("This is me in vim")}> button </button>
    {/* <button onClick={removeCourse("lskdjflsd")}>remove</button> */}



    </>
  )
}

export default App
