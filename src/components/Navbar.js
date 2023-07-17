import React from "react";
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { portfolio, about, contact } from "../App";

const MyNavbar = ({portfolioref, aboutref, contactref}) => {
  // const portfolio = useRef('null');
  // const about = useRef('null');
  // const contact = useRef('null');
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offSetTop,
      behavior: 'smooth'
    });
    console.log(elementRef.current)
  };
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Fikerte Tesfaye</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                  {/* <NavLink to={{pathname: "/", hash: "#about"}} className="nav-link">Portfolio</NavLink> */}
                  <NavLink onClick={() => scrollToSection(portfolioref)} className="nav-link" to="portfolio">Portfolio</NavLink>
                  <NavLink onClick={() => scrollToSection(aboutref)} className="nav-link" to="about">About</NavLink>
                  <NavLink onClick={() => scrollToSection(contactref)} className="nav-link" to="contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
    
};
// export {portfolio};
export default MyNavbar;