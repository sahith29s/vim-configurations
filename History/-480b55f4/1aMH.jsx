import { useState } from 'react'

function App() {
  const [passLength, setPassLength] = useState(4)

  const handleSetPassLength = () =>{
    
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="title">password</div>
          <button className="copyBtn">copy</button>
        </div>
      
        <input type="range" onChange={(e) => handleSetPassLength(e)} />
      </div>
    </>
  )
}

export default App
