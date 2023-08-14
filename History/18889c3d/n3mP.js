import 'bootstrap/dist/css/bootstrap.min.css';
import MyNotes from "./components/screens/MyNotes/MyNotes"
import { Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header"
import './App.css';
import Footer from './components/Footer/Footer';
import LandingPage from './components/screens/LandingPage/LandingPage'
import RegisterScreen from './components/screens/RegisterScreen/RegisterScreen';
import LoginScreen from './components/screens/LoginScreen/LoginScreen';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' exact element={<LandingPage />} />
        <Route path='/register' exact element={<RegisterScreen />} />
        <Route path='/login' exact element={<LoginScreen />} />
        <Route path="/mynotes" exact element={<MyNotes />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
