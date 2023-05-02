import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
// import CloseButton from 'react-bootstrap/CloseButton';

const MyNavbar = () => {
   const [expanded,setExpanded] = useState(false)
   const handleSelect = () =>  setExpanded(false)
   
    // <nav>
    //     <a href="#"><span>Fikerte Tesfaye</span></a>
    //     <button><i class="fas fa-bars"></i></button>
    //     <ul>
    //         <li>
    //             <NavLink to="/" activeclassname="active">Portfolio</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/about" activeclassname="active">About</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/contact" activeclassname="active">Contact</NavLink>
    //         </li>
    //     </ul>
    // </nav>
    return (
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        {console.log({expanded})}
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-expand"/>
        {console.log({expanded})}

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-expand"
            aria-labelledby="offcanvasNavbarLabel-expand-expand"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-expand">

              </Offcanvas.Title>
              {/* <CloseButton variant="white" onClick={()=>({expand} = true)}/> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <button type="button" className="btn btn-primary" ><NavLink to="/">Portfolio</NavLink></button>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  
    );
    
};
export default MyNavbar;