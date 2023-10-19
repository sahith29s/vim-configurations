import { useState } from "react"
import "./App.css"
import InputField from "./component/InputField"
import { Todo } from "./component/Model"

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("sahith")
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos , {id : 10 , todo : todo , isDone : false}])

    }
  };
  return (
    <>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </div>
    </>
  )
}

export default App
