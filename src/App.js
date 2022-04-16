import { Route, Routes } from "react-router-dom";
import Login from "../src/components/Login/Login";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
