import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'

function App() {

  const todos = useSelector((state) => state.todos.todos)
  const 
  console.log(todos);

  return (
    <>
      {todos.map((item) => {
        return <div key={item.id}>{item.text}</div>
      })}
    </>
  )
}

export default App
