import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Componentes importados
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

//Pages importadas
import Home from "./pages/Home"
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

//Context importado
import CartProvider from "./context/CartContext";


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>           
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Pizza/p001" element={<Pizza />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>          
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>      
    </>
  );
}

export default App;