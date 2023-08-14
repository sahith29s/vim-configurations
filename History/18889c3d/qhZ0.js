import 'bootstrap/dist/css/bootstrap.min.css';
import MyNotes from "./components/screens/MyNotes/MyNotes"
import { Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header"
import './App.css';
import Footer from './components/Footer/Footer';
import LandingPage from './components/screens/LandingPage/LandingPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
