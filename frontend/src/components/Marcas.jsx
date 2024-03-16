import React, { useState, useEffect } from 'react';
import Slider from 'react-infinite-logo-slider';
import axios from 'axios';
import { Card, CardImg, CardBody } from 'react-bootstrap'; // Importa componentes de tarjeta de Reactstrap o la librería que estés utilizando
import './Marcas.css';

const MarcaList = () => {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    obtenerMarcas();
  }, []);

  const obtenerMarcas = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/marcas');
      setMarcas(response.data);
    } catch (error) {
      console.error('Error al obtener las marcas:', error);
    }
  };


  return (
    <div className='container'>
      <Slider
        autoWidth={true}
        maxWidth={1000}
        duration={20}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={'#fff'}
        className="centered-slider"
        infinite={true}
      >
        {marcas.map(marca => ( // Utiliza la función para duplicar los slides
          <Slider.Slide key={marca._id} className="centered-slide">
            <Card className="image-card">
              <CardBody className="image-card-body">
                <CardImg src={marca.image} alt={marca.name} className="card-img" />
              </CardBody>
            </Card>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default MarcaList;
