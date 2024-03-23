import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/navbar"} element={<Navbar />}></Route>
        <Route path={"/"} element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
