import logo from './logo.svg';
import './App.css';


const fNameInput = async (e) =>{
  console.log("lsjdf");
};

const formSubmit = async () =>{
  
};
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
