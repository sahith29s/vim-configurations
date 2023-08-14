import { Route, Routes } from "react-router-dom";
import store from "./store"

import { useEffect, useState } from "react";
import HomePage from "./components/pages/HomePage";
import Cart from "./components/pages/Cart";
import SignUpForm from "./components/pages/SignUp";
import Login from "./components/pages/Login";


const App = () => {
  // const productsArrary = 
  // productsArray
  // const { productsArray} = store( (state : any) => state.productsArray)
  // console.log(productsArray)
  const productsArray = store((state: any) => state.productsArray)
  const addToProductsArray = store((state: any) => state.addToProductsArray)

  const [value, setValue] = useState(0)


  return (
    <div>
      <div>{productsArray}</div>
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
