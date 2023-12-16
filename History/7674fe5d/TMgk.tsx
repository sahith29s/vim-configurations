import { Route, Routes } from "react-router-dom"
import Header from "./componenets/Header"

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/login" element={<Header />} />
          <Route path="/login" element={<Header />} />
        </Routes>
      </main>
    </>
  )
}

export default App
