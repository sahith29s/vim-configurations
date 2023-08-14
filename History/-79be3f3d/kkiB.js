import {  Routes , Route } from "react-router-dom";

//import conmponents 
import Main from "./components/Main";


function App() {
  return (
    <>
    
    
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/quiz" element={<Qu} />
    </Routes>

    </>
  );
}

export default App;
