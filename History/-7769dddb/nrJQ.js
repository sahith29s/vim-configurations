import logo from './logo.svg';
import { useState } from "react"

function App() {
  let array = ["play cricket", "play video game", "read boo"]
  const [listArray, setListArray] = useState([...array])
  let [check, setCheck] = useState(false)


  const handleCheck = () => {
    setCheck(!check)
  };
  const handleDelete = (index) => {
     
  }

  return (
    <div className="App">
      <ul>
        {
          listArray.map((item, index, arrary) => {

            return <li key={index}>
              <span><input type="checkbox" onClick={() => handleCheck(index)} /></span>
              {item}
              <span>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </span>
            </li>
          })
        }

      </ul>


    </div>
  );
}

export default App;
