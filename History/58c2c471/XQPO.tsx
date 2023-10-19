import { useState } from "react"
import "./App.css"
import InputField from "./component/InputField"
import { Todo } from "./component/Model"
import TodoList from "./component/TodoList"

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("sahith")
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos , {id : Date.now(), todo , isDone : false}])
      setTodo("")
    }
  };
  console.log(todos);
  return (
    <>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default App
