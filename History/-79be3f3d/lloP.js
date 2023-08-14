import {  Routes , Route } from "react-router-dom";

//import conmponents 

import Main from "./components/Main";
import Quiz from "./components/Quiz";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact element={<Main/>} />
      <Route path="/quiz" exact element={<Quiz/>} />
    </Routes>

    </>
  );
}

export default App;
