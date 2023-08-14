import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import MyNotes from "./components/screens/MyNotes/MyNotes"
import { Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header"
import './App.css';
import Footer from './components/Footer/Footer';
import LandingPage from './components/screens/LandingPage/LandingPage'

function App() {
  const fetchNotes = async () => {
    const data = await axios.get("http://localhost:5000/api/notes")
    console.log(data);
  };

  useEffect(() => {
    console.log("sahith");
    fetchNotes()

  }, [])
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
