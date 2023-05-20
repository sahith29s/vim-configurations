import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';






function App() {

  

  const formSubmit = async (event) =>{
    event.preventDefault()
    
  }

  const [firstName, setfirstName] = useState("")
  const [secondName, setsecondName] = useState("")
  const [fullName, setfullName] = useState("")

  const inputOneChange = async (e) =>{
    setfirstName(e.target.value)
    setfullName(`${firstName} ${secondName}`)
  }

  const inputTwoChange = async (e) =>{
    setsecondName(e.target.value)
  }

  return (
    <>
  <form onSubmit={formSubmit} action="">

    <div>{fullName}</div>

    <input type="text" onChange={inputOneChange} />

    <br />
    <br />
    

    <input type="text" onChange={inputTwoChange}/>

  </form>
    </>





  )
};

export default App;
