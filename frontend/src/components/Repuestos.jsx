import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup } from 'react-bootstrap';

const RepuestosList = () => {
  const [repuestos, setRepuestos] = useState([]);

  useEffect(() => {
    getRepuestos();
  }, []);

  const getRepuestos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/repuestos'); // Cambia la URL a la del servidor de backend
      setRepuestos(response.data);
    } catch (error) {
      console.error('Error fetching repuestos:', error);
    }
  };

  return (
    <Container>
      <h2 className="mt-4 mb-3">Repuestos</h2>
      <ListGroup>
        {repuestos.map((repuesto) => (
          <ListGroup.Item key={repuesto._id}>
            <h3>{repuesto.title}</h3>
            <p><strong>Description:</strong> {repuesto.description}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default RepuestosList;
