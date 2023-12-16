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
          <Route path="/login" />
          <Route path="/login" />
        </Routes>
      </main>
    </>
  )
}

export default App
