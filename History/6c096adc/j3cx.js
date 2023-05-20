import './App.css';
import {useState} from "react"

function App() {
  const [number, setnumber] = useState(0)

  const increment =()=>{
    setnumber(number + 1)
  }
  

  return (
    <>
    <div>{number}</div>

    <button onClick={increment}>click me</button>

    
    </>
  );
}

export default App;
