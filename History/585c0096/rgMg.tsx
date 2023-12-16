import { Route, Routes } from "react-router-dom"
import Signin from "./components/pages/Signin"
import Login from "./components/pages/Login"
import HomePage from "./components/pages/HomePage"
// import { Counter } from "./components/counter"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="signin" element={<Signin />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotpass" element={<For}
      </Routes>
    </>
  )
}

export default App
