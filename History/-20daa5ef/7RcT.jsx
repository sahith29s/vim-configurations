import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './assets/features/todo/todoSlice'

function App() {

  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()
  console.log(todos);

  return (
    <>
      {
        todos.map((item) => {
          return <div key={item.id}>{item.text}</div>
        })
      }
      <button onClick={() => dispatch(addTodo("fuck"))}>
        sahith
      </button>
    </>
  )
}

export default App
