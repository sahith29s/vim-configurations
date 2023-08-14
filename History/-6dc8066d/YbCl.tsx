import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import Cart from "./components/pages/Cart"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart/>} />
        

      </Routes>
    </div>

  )
}

export default App