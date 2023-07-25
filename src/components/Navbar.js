import React, { useState } from "react";
import {useLocation} from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Fikerte Tesfaye</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <HashLink className={`nav-link ${isActive("#portfolio") ? "active" : ""}`} to="/#portfolio">Portfolio</HashLink>
              <HashLink className={`nav-link ${isActive("#about") ? "active" : ""}`}  to="/#about">About</HashLink>
              <HashLink className={`nav-link ${isActive("#contact") ? "active" : ""}`}  to="/#contact">Contact</HashLink>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
    
};

export default MyNavbar;