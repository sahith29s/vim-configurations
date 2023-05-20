import logo from './logo.svg';
import './App.css';


const fNameInput = async (e) =>{
  console.log("lsjdf");

};
function App() {
  return (
  <>
  <form action="">

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
