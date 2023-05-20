import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';






function App() {

  const [name, setname] = useState("Hello")

  const formSubmit = async (e) =>{
    e.preventDefault()
    console.log();
    
  }

  const change = async () =>{
    setname()
  }


  return (
    <>
  <form onSubmit={formSubmit} action="">
    <input type="text" onChange={change} />
  </form>
    </>





  )
};

export default App;
