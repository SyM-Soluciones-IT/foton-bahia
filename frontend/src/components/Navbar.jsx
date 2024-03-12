import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CustomNavBar() {
  const handleInicioClick = async () => {
    // Hacer la petición para obtener las categorías
    try {
      const response = await axios.get('http://localhost:5000/api/productos');
      if (response.status === 200) {
        // Realizar alguna acción con las categorías si es necesario
      } else {
        console.error('Error fetching categorias:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching categorias:', error);
    }
  };

  const handleProductosClick = async () => {
    // Hacer la petición para obtener las categorías
    try {
      const response = await axios.get('http://localhost:5000/api/productos');
      if (response.status === 200) {
        // Realizar alguna acción con las categorías si es necesario
      } else {
        console.error('Error fetching categorias:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching categorias:', error);
    }
  };

  return (
    <Navbar variant='dark' expand="lg" style={{ backgroundColor: 'gray', color: 'white', position: 'sticky', top: 120, zIndex: 100, padding: '10px' }}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Nav.Link as={Link} to="/" style={{ textDecoration: 'none' }} onClick={handleInicioClick}>
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/productos" style={{ cursor: 'pointer' }} onClick={handleProductosClick}>
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/repuestos">Repuestos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;
