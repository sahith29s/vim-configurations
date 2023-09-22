import { useState } from 'react'

function App() {
  const [passLength, setPassLength] = useState(4)

  const [data, setData] = useState(
    [
      { title: "Include Uppercase Letters", state: "false" },
      { title: "Include Lowercase Letters", state: "false" },
      { title: "Include Numbers", state: "false" },
      { title: "Include Symbols", state: "false" }
    ]
  )

  const handleInputChange = (index) =>{

    const updatedvalue = data

  };



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
            <div key={index}>
              <input onClick={() => handleInputChange(index)} type="checkbox" checked={item.state.boolean} />
              <label htmlFor={item.title}>{item.title}</label>

            </div>
          )
        })
      }


    </>
  )
}

export default App
