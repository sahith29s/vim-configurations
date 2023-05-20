import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';






function App() {

  const formSubmit = async () =>{
    console.log("lsdjf");
    
  }


  return (
    <>
  <form onSubmit={formSubmit} action="">
    <input type="text" />
    <div>alsjdf</div>
  </form>
    </>





  )
};

export default App;
