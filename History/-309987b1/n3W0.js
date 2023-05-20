import logo from './logo.svg';
import { useState } from 'react';
import './App.css';



function App() {

const [fName, setFName] = useState("")
const [lName, setLName] = useState("")
const [email, setEmail] = useState("")
const [number,setNumber] = useState("")

const fNameInput = async (e) =>{
  console.log("lsjdf");
};

const formSubmit = async (e) =>{
  e.preventDefault()

};

const lNameInput = async () =>{
  console.log("lsjf");
};


const emailInput = async () =>{
  console.log("lsjdf");
};

const numberInput = async (e) =>{
  setNumber(e.target.value)
};
  return (
  <>
  <form action="" onSubmit={formSubmit}>
    <div>Hello {fName} {lName} {email} {number}</div>

  <input type="text" onChange={fNameInput} />
  <br />
  <input type="text" onChange={lNameInput} />
  <br />
  <input type="email" onChange={emailInput} />
  <br />
  <input type="text" placeholder='Phone Number' onChange={numberInput} />

  <br />
  <input type="submit" value="lsjdf" />



  </form>
  
  
  
  </>
  );
}

export default App;
