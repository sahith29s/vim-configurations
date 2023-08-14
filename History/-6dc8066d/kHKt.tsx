import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/HomePage"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<HomePage />} />
        

      </Routes>
    </div>

  )
}

export default App