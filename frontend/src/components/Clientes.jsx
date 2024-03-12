import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Clientes</h2>
      <ul>
        {clientes.map(cliente => (
          <img key={cliente._id} src={cliente.image} alt={cliente.name} />
        ))}
      </ul>
    </div>
  );
};

export default ClientesList;
