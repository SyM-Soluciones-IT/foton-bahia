import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ClientesList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    obtenerClientes();
  }, []);

  const obtenerClientes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/clientes'); // Cambia la URL según tu configuración
      setClientes(response.data);
    } catch (error) {
      console.error('Error fetching clientes:', error);
    }
  };

  return (
    <Container>
      <h2>Clientes</h2>
      <Row>
        {clientes.map(cliente => (
          <Col key={cliente._id} xs={6} md={4} lg={3}>
            <Image src={cliente.image} alt={cliente.name} fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ClientesList;
