import logo from './logo.svg';
import { useState } from "react"

function App() {
  let array = ["play cricket", "play video game", "read boo"]
  const [listArray, setListArray] = useState([...array])
  const handleDelete = (index) =>{
    setListArray((prevArray) =>{
      prevArray.filter((elementOfPrev) =>{
        elementOfPrev === listArray[index] ? "" : return elementOfPrev
      })
    })
    

  };
  return (
    <div className="App">
      <ul>
        {
          listArray.map((item, index, arrary) => {

            return <li>{item} <span> <button onClick={handleDelete(index)}>Delete</button></span></li>
          })
        }

      </ul>


    </div>
  );
}

export default App;
