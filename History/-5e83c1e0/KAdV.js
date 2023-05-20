import './App.css';

const SlotM = () =>{
  let x = "a"
  let y = "a"
  let z = "a"

  if((x === y) && (y===z)){
    return(
      <>
     <div className="slot-inner"></div> 
      </>
    )
  } 
}

function App() {
  return (
    <>
    <h1>Welcome to 😄<span>Slot Machine</span></h1>
    </>
  );
}

export default App;
