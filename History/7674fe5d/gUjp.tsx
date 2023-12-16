import { Route, Routes } from "react-router-dom"
import Header from "./componenets/Header"
import Login from "./componenets/Login"
import Signup from "./componenets/Signup"

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Signup />} />
        </Routes>
      </main>
    </>
  )
}

export default App
