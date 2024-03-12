import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="container">
      <h2 className="mt-4 mb-3">Repuestos List</h2>
      <ul className="list-group">
        {repuestos.map((repuesto) => (
          <li key={repuesto._id} className="list-group-item">
            <h3>{repuesto.title}</h3>
            <p><strong>Description:</strong> {repuesto.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepuestosList;
