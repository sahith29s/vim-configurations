import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


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

const numberInput = async () =>{
  console.log("lsjdf");
};

function App() {

const [fName, setFName] = useState("")
const [lName, setLName] = useState("")
const [email, setEmail] = useState("")
const [number,setNumber] = useState("")
  return (
  <>
  <form action="" onSubmit={formSubmit}>
    <div>{fName} {lName} {email} {number}</div>

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
