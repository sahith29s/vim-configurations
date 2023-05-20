import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';






function App() {

  

  const formSubmit = async (event) =>{
    event.preventDefault()
    setfullName(`${firstName} ${secondName}`)
    setfirstName("")
    setsecondName("")

    
  }

  const [firstName, setfirstName] = useState("")
  const [secondName, setsecondName] = useState("")
  const [fullName, setfullName] = useState("")

  const inputOneChange = async (e) =>{
    setfirstName(e.target.value)
  }

  const inputTwoChange = async (e) =>{
    setsecondName(e.target.value)
  }

  return (
    <>
  <form onSubmit={formSubmit} action="">

    <div>{"Hello " + fullName}</div>

    <input type="text" onChange={inputOneChange} />



    <br />
    <br />
    

    <input type="text" onChange={inputTwoChange}/>
    <br />
    <br />

   <input value="submit"   type="submit" /> 

  </form>
    </>





  )
};

export default App;
