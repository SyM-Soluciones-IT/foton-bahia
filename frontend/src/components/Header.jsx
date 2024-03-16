import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import axios from 'axios';
import logoFoton from '../assets/foton-logo-h-nobg.png';
import logoBahiaMobility from '../assets/logo-bahia-mobility.png';
import './Header.css';

const Header = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleToggleClick = () => {
    let button = document.getElementById("responsive-navbar-toggle");
    button.click(); // Simular un clic en el botón del navbar toggle
  };


  const handleInicioClick = async () => {
    setSelectedSection('inicio');
    handleToggleClick();
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
    setSelectedSection('productos');
    handleToggleClick();
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

  const handleRepuestosClick = () => {
    setSelectedSection('repuestos');
    handleToggleClick();
  };

  const handleContactoClick = () => {
    setSelectedSection('contacto');
    handleToggleClick();
  };


  return (
    <header style={{position: 'fixed', top: 0, backgroundColor: '#f8f9fa' ,zIndex: 100, width: '100%', display: 'flex', flexDirection: 'column', }}>
      <div className="d-flex justify-content-between" style={{padding: '0 3%'}}>
        <Link to="/">
          <img src={logoFoton} alt="Logo Foton" width={150} />
        </Link>
        <img src={logoBahiaMobility} alt="Logo Bahia Mobility" width={80} />
      </div>
      <div className='m-0 p-0'> 
      <Navbar variant='dark' expand="lg" style={{ backgroundColor: 'gray', color: 'white', position: 'sticky', zIndex: 100, paddingLeft : '3%', paddingRight: '3%'}}>
        <Navbar.Toggle id='responsive-navbar-toggle' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  >
          <Nav className="ml-auto" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Nav.Link
        as={Link}
        to="/"
        style={{
          textDecoration: 'none',
          backgroundColor: selectedSection === 'inicio' ? '#333333' : 'transparent',
          color: selectedSection === 'inicio' ? 'white' : 'inherit',
          borderRadius: '20px',
          padding: '10px',
          marginTop: window.innerWidth <= 767 ? '10px' : '0' // Aplica 10px de margen en pantallas pequeñas y 0 en pantallas grandes
        }}
        onClick={handleInicioClick}
        >
          Inicio
        </Nav.Link>
            <Nav.Link as={Link} to="/productos" style={{ cursor: 'pointer', backgroundColor: selectedSection === 'productos' ? '#333333' : 'transparent', color: selectedSection === 'productos' ? 'white' : 'inherit', borderRadius: '20px', padding: '10px' }} onClick={handleProductosClick}>
              Categorias
            </Nav.Link>
            <Nav.Link as={Link} to="/repuestos" style={{ textDecoration: 'none', backgroundColor: selectedSection === 'repuestos' ? '#333333' : 'transparent', color: selectedSection === 'repuestos' ? 'white' : 'inherit', borderRadius: '20px', padding: '10px' }} onClick={handleRepuestosClick}>
              Repuestos
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto" style={{ textDecoration: 'none', backgroundColor: selectedSection === 'contacto' ? '#333333' : 'transparent', color: selectedSection === 'contacto' ? 'white' : 'inherit', borderRadius: '20px', padding: '10px' }} onClick={handleContactoClick}>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
