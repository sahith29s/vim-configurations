import { Route, Routes } from "react-router-dom";
import store from "./store";

import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import Cart from "./components/pages/Cart";
import SignUpForm from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import ChatApp from "./components/pages/ChatApp";

const App = () => {
  const productsArray = store((state: any) => state.productsArray);
  const addToProductsArray = store((state: any) => state.addToProductsArray);
  console.log(productsArray);

  const [value, setValue] = useState(0);

  return (
    <div>
      {/* <div>{productsArray}</div> */}
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
