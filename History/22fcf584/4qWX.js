import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';






function App() {

  const [name, setname] = useState()

  const formSubmit = async (e) =>{
    e.preventDefault()
    console.log();
    
  }


  return (
    <>
  <form onSubmit={formSubmit} action="">
    <input type="text" onChange={} />
  </form>
    </>





  )
};

export default App;
