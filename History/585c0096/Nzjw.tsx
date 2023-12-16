import { Route, Routes } from "react-router-dom"
import Navbar from "./components/justComponents/Navbar"
import Swiper from "./components/justComponents/SwiperCompo"
import Signin from "./components/pages/Signin"
// import { Counter } from "./components/counter"

function App() {

  return (
    <>
      <Routes>
        <Route path="signin" element={<Signin/>} />
      </Routes>
    </>
  )
}

export default App
