import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavBar() {
  return (
    <Navbar variant='dark' expand="lg" style={{ backgroundColor: 'gray', color: 'white', position: 'sticky', top: 120, zIndex: 100, padding: '10px' }}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Nav.Link as={Link} to="/" style={{ textDecoration: 'none' }}>
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/repuestos">Repuestos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;
