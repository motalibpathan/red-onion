import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../src/components/Login/Login";
import Cart from "./components/Cart/Cart";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import useCart from "./hooks/useCart";

export const CartContext = createContext([]);

function App() {
  const { cart, setCart } = useCart();

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </CartContext.Provider>
    </div>
  );
}

export default App;
