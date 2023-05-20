import logo from './logo.svg';
import './App.css';
import {add, div} from "./Calc.js"



function App() {
  return (
    <>
    {add(92,8)}
    {div(40/3)}
    </>
  );
}

export default App;
