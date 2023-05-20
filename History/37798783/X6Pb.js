import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

import { Route , Routes } from "react-router-dom";

function App() {
  return (
    <>
    

    <Routes>
      <Route path="/about" element={<About/>} />
    </Routes>

    </>
  );
}

export default App;
