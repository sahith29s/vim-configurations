import './App.css';
import { Route, Routes} from "react-router-dom"
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <>
    <Route path='/' element={<><Home/> <Header/></>} />

    </>
  );
}

export default App;
