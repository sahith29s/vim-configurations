import './App.css';
import { Route, Routes } from "react-router-dom"
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <>
      {/* Header */}
      <Routes>
        

        <Header />
        <Home />

      </Routes>
      {/* Home */}
    </>
  );
}

export default App;
