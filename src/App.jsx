import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import {ToastContainer} from "react-toastify"
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import FoodDetails from "./Pages/FoodDetails";
import NotFound from "./Pages/NotFound";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </div>
    </>
  );
}

export default App;
