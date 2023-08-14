import 'bootstrap/dist/css/bootstrap.min.css';
import MyNotes from "./components/screens/MyNotes/MyNotes"
import { Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header"
import './App.css';
import Footer from './components/Footer/Footer';
import LandingPage from './components/screens/LandingPage/LandingPage'
import RegisterScreen from './components/screens/RegisterScreen/RegisterScreen';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
