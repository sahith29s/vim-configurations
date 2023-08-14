import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={`<div> this is me <div>`} />
      </Routes>
    </>


  );
}

export default App;
