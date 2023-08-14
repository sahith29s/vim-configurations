import './App.css';
import { Route, Routes } from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={ <> <Header /> <Home /> </>}/>
        <Route path='/checkout' element={<> <Header /> <Checkout/> </> } />
        <Route  />
      </Routes>

    </>
  );
}

export default App;
