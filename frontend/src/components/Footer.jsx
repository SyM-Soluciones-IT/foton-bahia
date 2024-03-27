import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import './Footer.css'; // Estilo personalizado para el footer

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <h5>Información</h5>
            <ul className="list-unstyled">
              <li><a href="/nosotros">Acerca de nosotros</a></li>
              <li><a href="#">Política de privacidad</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Redes Sociales</h5>
            <div>
              <a href="https://www.instagram.com/bahiamobility/?hl=es-la" target='_blank' rel="noopener noreferrer"><AiOutlineInstagram /></a>
              <a href="https://www.youtube.com/@bahiamobility-Camiones/featured" target='_blank' rel="noopener noreferrer"><FaYoutube/></a>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Suscríbete</h5>
            {/* Aquí puedes incluir el formulario */}
            <form>
              <input type="email" placeholder="Email" required />
              <button type="submit">Suscríbete</button>
            </form>
          </Col>
          <Col xs={12} md={3}>
            <h5>Contacto</h5>
            <p>Hipólito Yrigoyen 3871, B8000 Bahía Blanca, Provincia de Buenos Aires</p>
            <p>Email: ventas@fotonbahia.com.ar</p>
            <p>Teléfono: 0291 446-0146</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12}>
            <p className="text-center">© 2024 SyM Soluciones IT. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;