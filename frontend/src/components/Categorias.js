import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoriaList = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    obtenerCategorias();
  }, []);

  const obtenerCategorias = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/productos');
      if (response.status === 200) {
        setCategorias(response.data);
      } else {
        console.error('Error fetching categorias:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching categorias:', error);
    }
  };

  return (
    <Container>
      <h2 className="mt-4 mb-3">Categorías</h2>
      <div className="row">
        {categorias.map(categoria => (
          <div key={categoria._id} className="col-md-4 mb-4">
            <Card className="primary" border="primary">
              <Card.Img variant="top" src={categoria.image} />
              <Card.Body>
                <Card.Title>{categoria.name}</Card.Title>
                <Link to={`/productos/${categoria.name}`}>
                  <Button variant="primary">Ver Productos</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CategoriaList;
