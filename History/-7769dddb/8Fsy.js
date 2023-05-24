import logo from './logo.svg';
import { useState } from "react"

function App() {
  let array = ["play cricket", "play video game", "read boo"]
  const [listArray, setListArray] = useState([...array])
  const handleDelete = (index) =>{
    let filteredArray = 
  }

  return (
    <div className="App">
      <ul>
        {
          listArray.map((item, index, arrary) => {

            return <li>{item} <span> <button onClick={handleDelete}>Delete</button></span></li>
          })
        }

      </ul>


    </div>
  );
}

export default App;
