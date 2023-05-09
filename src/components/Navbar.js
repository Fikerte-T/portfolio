import React from "react";
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Fikerte Tesfaye</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/" className={isActive=>(isActive ? 'active' : '')}>Portfolio</Nav.Link>
                  <Nav.Link as={Link} to="about">About</Nav.Link>
                  <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
    
};
export default MyNavbar;