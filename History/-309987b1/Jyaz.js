import logo from './logo.svg';
import './App.css';


const fNameInput = async (e) =>{
  console.log("lsjdf");
};

const formSubmit = async (e) =>{
  e.preventDefault()

};

const [fName, setFName] = useState("")
const [lName, setLName] = useState("")
const [email, setEmail] = useState("")
const [number,setNumber] = useState("")
function App() {
  return (
  <>
  <form action="" onSubmit={formSubmit}>

  <input type="text" onChange={fNameInput} />
  <br />
  <input type="text" onChange={fNameInput} />
  <br />
  <input type="email" onChange={fNameInput} />
  <br />
  <input type="text" placeholder='Phone Number' onChange={fNameInput} />

  <br />
  <input type="submit" value="lsjdf" />



  </form>
  
  
  
  </>
  );
}

export default App;
