import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



import Username from "./components/Username"
import Password from "./components/Password"
import Register from "./components/Register"



const router = createBrowserRouter([
    {
        path :  "/",
        element : <div>route user</div>
    }
])
const App = () => {
  return (
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  )
}

export default App