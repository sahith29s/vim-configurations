import { Route, Routes } from "react-router-dom"
import Signin from "./components/pages/Signin"
import Login from "./components/pages/Login"
import HomePage from "./components/pages/HomePage"
import ForgotPassword from "./components/pages/ForgotPassword"
import ResetPassword from "./components/pages/ResetPasword"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/login" element={<Login />} />
        <Route path="/login/forgotpass" element={<ForgotPassword />} />
        <Route path="/login/resetpass" element={<ResetPassword />} />

      </Routes>
    </>
  )
}

export default App
