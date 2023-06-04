import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import CartWidget from './CartWidget';


export const CustomNavbar = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">dagú</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Compras Mayorista</Nav.Link>
              <Nav.Link href="#action2">Compras minorista</Nav.Link>
              <Nav.Link href="#action3">Contacto</Nav.Link>
              <Nav.Link><CartWidget /></Nav.Link>
            </Nav>
          </Navbar.Collapse>    
        </Container>
      </Navbar>
    );
  };
  
  export default CustomNavbar;