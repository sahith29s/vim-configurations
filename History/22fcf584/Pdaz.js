import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';






function App() {

  const [name, setname] = useState()

  const formSubmit = async (e) =>{
    e.preventDefault()
    
  }

  const change = async (e) =>{
    setname(e.target.value)
  }


  return (
    <>
  <form onSubmit={formSubmit} action="">
    <div>{name || "hello"}</div>
    <input type="text" value={name} onChange={change} /> 
  </form>
    </>





  )
};

export default App;
