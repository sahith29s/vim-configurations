import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Routes } from 'react-router-dom';

import Header from "./components/Header/Header"
import './App.css';
import Footer from './components/Footer/Footer';
import LandingPage from './components/screens/LandingPage/LandingPage'

function App() {
  return (
    <>
    <Routes>
      <Route path='/about' element={<div>about</div>} />
    </Routes>
      <Header />
      <LandingPage />
      <Footer/>
    </>
  );
}

export default App;
