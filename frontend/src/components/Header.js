import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import logoFoton from '../assets/logo-foton.jpg';
import logoBahiaMobility from '../assets/logo-bahia-mobility.png';

const Header = () => {
  return (
    <header style={{position: 'sticky', top: 0, backgroundColor: '#f8f9fa', padding: '10px 0', zIndex: 100}}>
      <Container className="d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={logoFoton} alt="Logo Foton" width={150} height={100} />
        </Link>
        <img src={logoBahiaMobility} alt="Logo Bahia Mobility" width={100} height={100} />
      </Container>
    </header>
  );
};

export default Header;
