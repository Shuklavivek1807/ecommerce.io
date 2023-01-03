import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {Navbar,Container,Nav} from 'react-bootstrap';
import {AiOutlineUser,AiOutlineUserAdd,AiOutlineShoppingCart} from "react-icons/ai";

const Header = () => {
    const state = useSelector((state)=> state.handleCart)
  return (
    <div>

     <Navbar bg="dark" variant="dark" expand='lg'>
  <Container>
    <Navbar.Brand href="/">SHOPCART</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
      <NavLink className="nav-link" aria-current="page" to="/"> Home</NavLink>
      <NavLink className="nav-link" to="/products">Products</NavLink>
      <NavLink className="nav-link" to="/about">About</NavLink>
      <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </Nav>
      <Nav>
      <NavLink to="/login" className="btn btn-primary">
                   <AiOutlineUser/> Login</NavLink>&nbsp;
                <NavLink to="/register" className="btn btn-success">
                   <AiOutlineUserAdd/> Register</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <NavLink to="/cart" className="btn btn-outline-light ms-2">
                   <AiOutlineShoppingCart className="cart"/><sup><button className="btn btn-danger buttonCart">{state.length}</button></sup></NavLink>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  );
};

export default Header;