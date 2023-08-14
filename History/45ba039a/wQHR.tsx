import React from 'react'
import "./App.css"
import InputFeild from './conponents/InputFeild'
import { useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState("")
  console.log(todo)
  return (
    <>
      <div className="App">
        <div className="heading">Taskify</div>
        
        <InputFeild todo={todo} setTodo={setTodo} />

      </div>
    </>
  )
}

export default App