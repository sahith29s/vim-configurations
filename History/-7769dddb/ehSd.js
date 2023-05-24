import logo from './logo.svg';
import {useState} from "react"

function App() {
  let array = ["play cricket" , "play video game" , "read boo"]
  const [listArray, setListArray] = useState([...array])
  return (
    <div className="App">
      <ul>
        {
          
        }
        
      </ul>

    
    </div>
  );
}

export default App;
