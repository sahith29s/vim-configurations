import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';






function App() {

  

  const formSubmit = async (event) =>{
    event.preventDefault()
    
    console.log("lsdjf");
  }


  return (
    <>
  <form onSubmit={formSubmit} action="">

    <input type="text" onChange={inputOneChange} />

    <br />
    <br />
    

    <input type="text" onChange={inputTwoChange}/>

  </form>
    </>





  )
};

export default App;
