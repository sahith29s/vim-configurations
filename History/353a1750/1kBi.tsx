import { Route, Routes } from "react-router-dom";
import store from "./store"

import { useEffect, useState } from "react";
import HomePage from "./components/pages/HomePage";
import Cart from "./components/pages/Cart";
import SignUpForm from "./components/pages/SignUp";
import Login from "./components/pages/Login";


const App = () => {
  // const productsArrary = 
  const { productsArrary ,} = store()

  console.log(productsArrary)
  const [value, setValue] = useState(0)


  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
