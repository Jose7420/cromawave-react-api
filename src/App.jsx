

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBarExample from "./layaouts/navbar";
import Contact from "./components/contact";

import About from "./pages/about/about";
import './App.css';
import Prdoducto from "./pages/producto/Producto";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Logout } from "./components/Logout";
import User from "./components/User";
import Home from "./pages/home/home";
import { DetalleUser } from "./pages/detallesUser/DetalleUser";
import UserParametros from "./components/UserParametros";


function App() {

  return (
    <div className="">
        <Routes>
          <Route path="/" element={<NavBarExample />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="producto" element={<Prdoducto />} />
            <Route path="user" element={<User />} />
            <Route path="user/:parametros" element={<UserParametros />} />
            {/* <Route path="user/:busqueda" element={<UserBusqueda />} /> */}
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            
            <Route path="*" element={<Navigate replace to="/" />} />

          </Route>
        </Routes>
          </div>
  )
}

export default App;
