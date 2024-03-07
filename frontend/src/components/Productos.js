import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductosList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/productos'); // Cambia la URL a la del servidor de backend
      setProductos(response.data);
    } catch (error) {
      console.error('Error fetching productos:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Productos List</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto._id} className="col-md-4 mb-4">
            <div className="card border">
              <img src={producto.imageURL} className="card-img-top" alt={producto.title} />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
                <p className="card-text"><strong>Category:</strong> {producto.category}</p>
                <p className="card-text"><strong>Specs:</strong> {producto.specs}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductosList;
