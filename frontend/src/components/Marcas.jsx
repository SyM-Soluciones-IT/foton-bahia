import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarcaList = () => {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    obtenerMarcas();
  }, []);

  const obtenerMarcas = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/marcas'); // Cambia la URL según tu configuración
      setMarcas(response.data);
    } catch (error) {
      console.error('Error fetching marcas:', error);
    }
  };

  return (
    <div>
      <h2>Marcas</h2>
      <ul>
        {marcas.map(marca => (
          <img key={marca._id} src={marca.image} alt={marca.name} />
        ))}
      </ul>
    </div>
  );
};

export default MarcaList;
