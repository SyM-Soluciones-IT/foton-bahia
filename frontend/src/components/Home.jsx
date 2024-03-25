// En el componente Home.js
import React from 'react';
import CategoriaList from './Categorias';
import RepuestosList from './Repuestos';
import ContactForm from './Contacto';
import MarcaList from './Marcas'; // Importa el componente MarcaList
import ClientesList from './Clientes';
import './Home.css';

const Home = () => {
  return (
    <div>
      <section className="principal">
        <h2 className="principal-titulo-home">Concesionario Oficial Foton en Bahia Blanca y la zona</h2>
        {/* <h2>FOTON BAHIA</h2> */}
        <div className='container'>
          <p className="principal-texto-home">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate in veniam nam repellendus expedita facilis autem! Quas aperiam neque exercitationem! Libero maxime magnam repellendus assumenda aliquam blanditiis provident ullam eaque?</p>
        </div>
      </section>
      <img src="https://i.ibb.co/RhDkQYZ/concesionaria-h-img.jpg" alt="Imagen de la concesionaria" style={{width: '100vw', minHeight:"250px",objectFit:"cover", marginBottom: '1em'}}/>
      <section id="productos">
        <h2 className="principal-titulo-home">Nuestros Vehiculos</h2>
        <CategoriaList />
      </section>
      <section  id="marcas"> {/* Agrega una sección para mostrar las marcas */}
        <h2 className="principal-titulo-home">Marcas</h2>
        <MarcaList /> {/* Agrega el componente MarcaList */}
      </section>
      <section id="repuestos">
        {/* <h2 className="principal-titulo">Repuestos</h2> */}
        <RepuestosList />
      </section>
      <section id="clientes"> {/* Agrega una sección para mostrar las marcas */}
        <h2 className="principal-titulo-home">Clientes</h2>
        <ClientesList /> {/* Agrega el componente MarcaList */}
      </section>
      <section id="contacto">
        {/* <h2 className="principal-titulo">Contacto</h2> */}
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
