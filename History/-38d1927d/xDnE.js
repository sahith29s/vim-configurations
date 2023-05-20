import { useState, useEffect } from "react";

import "./index.css"
function App() {

  const [todos, setTodos] = useState([])

  let API_TODO = "http://localhost:3001/todos"

  useEffect(() => {

    GetTodos()
  }, [])

  const GetTodos = () => {
    fetch(API_TODO)
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error(err))
  };

  const completeTodo = async (id) => {
    console.log("localhost:3001/todo/complete/" + id);

    // const data = await fetch("localhost:3001/todo/complete/" + id)
    let data = await fetch("http://localhost:3001/todo/complete/646314699ab6108ee828f3f8" , {method : "PUT"})
    data = await data.json()


    setTodos(todos => todos.map(todo => {
      if (todo._id === data._id) {
        todo.complete = data.complete
      }
      return todo;
    }))

  };

  return (
    <>
      <div className="App">
        <h1>Welcome, there</h1>
        <h4>Your tasks </h4>

        <div className="todos">

          {todos.map((todo, index, arrary) => {
            return (

              <div value={todo.text} key={index} className={
                `todo ${todo.complete ? "is-complete" : ""}`
              } onClick={() => completeTodo(todo._id)}>
                <div className="checkbox"></div>

                <div className="text">{todo.text}</div>

                <div className="delete-todo">x</div>
              </div>

            )
          })}


        </div>
      </div>
    </>
  );
}

export default App;
