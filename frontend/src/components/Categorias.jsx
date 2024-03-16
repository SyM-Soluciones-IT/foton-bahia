import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Categorias.css'; // Importa tus estilos CSS aquí

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
      <div className="row">
        {categorias.map(categoria => (
          <div key={categoria._id} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-content-center border-0 flex-column flex-wrap">
              <div className='div-category' style={{ width: 'fit-content'}}>
                <Link to={`/productos/${categoria.name}`} className="category-link">
                  <img src={categoria.image} alt={categoria.name} className="category-image" />
                </Link>
              </div>
              <div className='div-category' style={{ alignSelf: 'center', width: 'fit-content'}}>
                <Link to={`/productos/${categoria.name}`} className="category-link">
                  <span className="category-title">{categoria.name}</span>
                </Link>
              </div>
          </div>
        ))}
      </div>
    </Container>
  );

};

export default CategoriaList;
