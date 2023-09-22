import { useState } from 'react'

function App() {
  const [passLength, setPassLength] = useState(4)

  const data = [
    { tille: "Include Uppercase Letters", state: "false" },
    { tille: "Include Lowercase Letters", state: "false" },
    { tille: "Include Numbers", state: "false" },
    { tille: "Include Symbols", state: "false" }
  ]
  const handleSetPassLength = (e) => {
    setPassLength(e.target.value)
    console.log(passLength);
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="title">password</div>
          <button className="copyBtn">copy</button>
        </div>

        <input type="range" min={4} max={20} value={passLength} onChange={(e) => handleSetPassLength(e)} />
      </div>

      {
        
      }


    </>
  )
}

export default App
