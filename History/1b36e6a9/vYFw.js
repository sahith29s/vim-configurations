import { useState } from "react";
function App() {

  const [inputValue, setInputValue] = useState("")

  const handleButtonClick = (e) => {
    setInputValue(e.target.value)

  };

  return (
    <>
      <div className="calulator-grid">
        <div className="output">
          <div className="current-operand">
            <input onChange={null} value={inputValue} type="text" />
          </div>

        </div>

        <button onClick={(e) => { handleButtonClick(e) }}> 1</button>
        <button onClick={(e) => { handleButtonClick(e) }}> 2</button>
        <button onClick={(e) => { handleButtonClick(e) }}> 3</button>
        <button onClick={(e) => { handleButtonClick(e) }}> 4</button>
        <button onClick={(e) => { handleButtonClick(e) }}> 5</button>
        <button onClick={(e) => { handleButtonClick(e) }}> 6</button>
        <button onClick={(e) => { handleButtonClick(e) }}> 7</button>
        <button onClick={(e) => { handleButtonClick(e) }}> 8</button>
        <button onClick={(e) => { handleButtonClick(e) }}> 9</button>
        <button onClick={(e) => { handleButtonClick(e) }}> 0</button>

      </div>
    </>
  );
}

export default App;
