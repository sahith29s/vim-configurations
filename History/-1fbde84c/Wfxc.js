import logo from './logo.svg';
import './App.css';
import {add, div} from "./Calc.js"



function App() {
  return (
    <>
    {add(92,8)}
    
    {div(5,7)}
    </>
  );
}

export default App;
