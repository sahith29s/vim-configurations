import { useState } from "react";

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")





  const submitform = async (e) => {
    e.preventDefault()
    const data = await fetch("http://localhost:3001/api/register" , {
      method : "POST" , 

      headers : {
        "Content-type" : "application/json"
      },

      body : {
        name ,
        email, 
        password
      }
    })


  };
  return (
    <>
      <div className="container">

        <h1>register</h1>

        <form onSubmit={submitform}>

          <div>
            <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="enter your name " />
          </div>


          <div>
            <input type="text" placeholder="enter your emanil" onChange={(e) => { setEmail(e.target.value) }} />
          </div>

          <div>
            <input type="text" placeholder="enter your password" onChange={(e) => { setPassword(e.target.value) }} />
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
