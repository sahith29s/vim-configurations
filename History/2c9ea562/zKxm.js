import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';


import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
function App() {
  return (
    <div className="App text-center">
      <ProductList/>
      <Home/>
    </div>
  );
}

export default App;
