import { Route, Routes } from "react-router-dom"
import Signin from "./components/pages/Signin"
import Login from "./components/pages/Login"
import HomePage from "./components/pages/HomePage"
import ForgotPassword from "./components/pages/ForgotPassword"
// import { Counter } from "./components/counter"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<Signin />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotpass" element={<ForgotPassword />}
      </Routes>
    </>
  )
}

export default App
