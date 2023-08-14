import './App.css';
import { Route, Routes, Switch } from "react-router-dom"
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <>
      <Routes>

          <Route path='/'>
            <Header />
            <div>this me is </div>

          </Route>



      </Routes>

    </>
  );
}

export default App;
