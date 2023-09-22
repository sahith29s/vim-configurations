import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="title">password</div>
          <button className="copyBtn">copy</button>
        </div>
      
        <input type="range" onChange={(e) => handle} />
      </div>
    </>
  )
}

export default App
