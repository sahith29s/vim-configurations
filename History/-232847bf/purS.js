import { useState } from "react";

function App() {
const [name , setName] = useState("")
const [email ,  setEmail] = useState("")
const [password , setPassword] = useState("")





  const submitform = async (e) => {
    e.preventdefault()
    console.log("sahith");
  };
  return (
    <>
      <div classname="container">

        <h1>register</h1>

        <form onsubmit={submitform}>

          <div>
            <input type="text" onChange={(e) =>{setName(e.target.value)}}  placeholder="enter your name " />
          </div>


          <div>
            <input type="text" placeholder="enter your emanil" />
          </div>

          <div>
            <input type="text" placeholder="enter your password" />
          </div>


          <div>
            <input type="submit" value="submit this" />
          </div>
        </form>
      </div>


    </>
  );
}

export default App;
