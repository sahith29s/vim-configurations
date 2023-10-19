import { useState } from "react"
import "./App.css"
import InputField from "./component/InputField"
import { Todo } from "./component/Model"
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("sahith")
  const [todos, seTtodos] = useState<Todo[]>([])
  const handleAdd = () =>{
  };
  return (
    <>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handelAdd={handleAdd} />
      </div>
    </>
  )
}

export default App
