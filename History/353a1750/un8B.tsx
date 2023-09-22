import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Cart from "./components/pages/Cart";
import SignUpForm from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import ChatApp from "./components/pages/ChatApp";
const { useDispatch } from "react-"

const App = () => {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatApp/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
