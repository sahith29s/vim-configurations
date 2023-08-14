import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./components/pages/HomePage";
import Cart from "./components/pages/Cart";
import SignUpForm from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Progressbar from "./components/pages/Progressbar";


const App = () => {
  const [value, setValue] = useState(10)

  useEffect(() => {
    setInterval(() => {
      setValue(value + 1)
    }, 200)
  })
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/progressbar" element={<Progressbar value={value} />} />
      </Routes>
    </div>
  );
};

export default App;
