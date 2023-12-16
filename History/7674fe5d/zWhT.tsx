import { Route, Routes } from "react-router-dom"
import Header from "./componenets/Header"
import Login from "./componenets/Login"

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={< />} />
        </Routes>
      </main>
    </>
  )
}

export default App
