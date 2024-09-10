import React, { useContext } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { formatNumber } from "../scripts";

function NavbarApp() {
  const { total } = useContext(CartContext);
  const token = false;

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar" sticky="top">
        <Container>
            <Navbar.Brand class="titulo" className="text-white">                 
                    Pizzería Mamma Mia!
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Link to="/" className='boton1 text-white'>🍕Home</Link>
                        {token ? (
                        <Link to="/Profile" className='boton1 text-white'>🔓Profile</Link>
                        ) : (
                        <Link to="/Login" className='boton1 text-white'>🔐Login</Link>
                        )}
                        {token ? (
                        <Link to="/Logout" className='boton1 text-white'>🔒Logout</Link>
                        ) : (
                        <Link to="/Register" className='boton1 text-white'>🔐Register</Link>
                        )}
                </Nav>
                <Nav>          
                    <Link to="/Cart" className="boton2 m-2 text-primary">🛒Total: {formatNumber(total)}</Link>                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default NavbarApp;