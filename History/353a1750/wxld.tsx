import { Route, Routes } from "react-router-dom";
import DemoRef from "./components/pages/DemoRef";
import HomePage from "./components/pages/HomePage";
import Cart from "./components/pages/Cart";
import SignUpForm from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import ChatApp from "./components/pages/ChatApp";
import De from "./components/pages/De";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reduxToolkit/store/store";

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatApp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/name" element={<DemoRef />} />
        <Route path="/de" element={<De />} />

      </Routes>
    </div>
  );
};

export default App;
