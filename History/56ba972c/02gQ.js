import './App.css';
import { Route, Routes } from "react-router-dom"
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <>
      {/* Header */}
      <Routes>
        <Route render = {() =>{
          <>
            <Header/>
            <Home/>
            <div>loda </div>
          </>
        }} />


      </Routes>
        <Header />
        <Home />
      {/* Home */}
    </>
  );
}

export default App;
