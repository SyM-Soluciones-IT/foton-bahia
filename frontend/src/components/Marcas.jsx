import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      console.error('Error fetching marcas:', error);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Intervalo de 3 segundos
    prevArrow: <button className="slick-prev">&#60;</button>,
    nextArrow: <button className="slick-next">&#62;</button>,
  };

  return (
    <div>
      <h2>Marcas</h2>
      <Slider {...settings}>
        {marcas.map(marca => (
          <div key={marca._id}>
            <img src={marca.image} alt={marca.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MarcaList;
