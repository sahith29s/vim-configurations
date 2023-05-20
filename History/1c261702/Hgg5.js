import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    fetchTodos()

  }, [])

  const fetchTodos = async () => {
    let data = await fetch("http://localhost:3001/todo/get")
    data = await data.json()
    setTodos(data)
  };

  const completeTodo = async (id) => {
    let data = await fetch("http://localhost:3001/todo/put/" + id, { method: "PUT" })
    data = await data.json()

    setTodos(todos.map((item, index, arrary) => {
      if (item._id === data._id) {
        item.complete = data.complete
      }
      return item
    }))
  }

const deleteTodo = async (id, e) => {
    e.stopPropagation()
    let data = await fetch("http://localhost:3001/todo/delete/" + id, { method: "DElETE" })
    data = await data.json()
    fetchTodos()
  };

  const addTodo = async () =>{
    let data = await fetch("http://localhost:3001/todo/post/" + inputValue, {method : "POST"} )
    data = await data.json()
    setTodos([data , ...todos])
    setInputValue("")

  };

  const inputStateFunc = async (e) =>{
    setInputValue(e.target.value)
  };

  return (
    <>

      <div className="App text-white bg-black min-h-[100vh] p-10 font-serif">
        <div className="text-3xl"> Welcome to Todo List </div>
        <div className=" text-slate-400 text-xl mb-10 ">Your tasks </div>

      <div>
        <input type="text" value={inputValue} onChange={(e) => inputStateFunc(e)} className="mb-5 px-3 w-[50rem] h-8 text-black rounded-xl outline-none border-none"  />
        <button onClick={addTodo} className="ml-3 bg-orange-500 ">Add Todo</button>
      </div>

        <div className="">
          {
            todos.map((item, index, arrary) => {

              return (
                <div key={item._id} onClick={() => { completeTodo(item._id) }} className={`todo cursor-pointer rounded-xl bg-green-500 h-10 flex mb-5 items-center ${item.complete ? "line-through" : ""} `}>
                  <div className={`w-5 h-5  rounded-full ml-2 ${item.complete ? "bg-white" : "bg-red-700"}`} ></div>

                  <div className={`ml-5 text-xl`}><span>{item.todo} </span>{item.complete ? <span className="">complete</span> : ""}</div>

                  <div onClick={(e) => { deleteTodo(item._id, e) }} className="absolute z-10 cursor-pointer left-[81rem] bg-purple-800 w-6 text-center rounded-full">X</div>
                </div>
              )

            })

          }
        </div>


      </div>


    </>
  )
}

export default App