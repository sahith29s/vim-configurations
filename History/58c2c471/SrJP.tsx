import { useState } from "react"
import "./App.css"
import InputField from "./component/InputField"
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("sahith")
  const [todos, seTtodos] = useState<([])
  
  return (
    <>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} />
      </div>
    </>
  )
}

export default App
