import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import DetailsProduct from "./components/details";
import CartComponent from "./components/CartComponent";
function App() {
  return (
    <>
      <Routes>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/navbar"} element={<Navbar />}></Route>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/details"} element={<DetailsProduct />}></Route>
        <Route path={"/cart"} element={<CartComponent />}></Route>
      </Routes>
    </>
  );
}

export default App;
