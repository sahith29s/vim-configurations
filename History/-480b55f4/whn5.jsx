import { useState } from 'react'

function App() {
  const [passLength, setPassLength] = useState(4)

  const data = [
    { title: "Include Uppercase Letters", state: "false" },
    { title: "Include Lowercase Letters", state: "false" },
    { title: "Include Numbers", state: "false" },
    { title: "Include Symbols", state: "false" }
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
        data.map((item, index) => {
          return (
            <div>
              <input type="checkbox" checked={item.state} />
              <label htmlFor={item.title}>{item.title}</label>

            </div>
          )
        })
      }


    </>
  )
}

export default App
