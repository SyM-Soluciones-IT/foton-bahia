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
    <div className='container'>
      <section className="principal">
        <h2  className="principal-titulo">Unico foton en bahia y la zona</h2>
        <p className="principal-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate in veniam nam repellendus expedita facilis autem! Quas aperiam neque exercitationem! Libero maxime magnam repellendus assumenda aliquam blanditiis provident ullam eaque?</p>
      </section>
      <section id="productos">
        <h2  className="principal-titulo">Nuestros Vehiculos</h2>
        <CategoriaList />
      </section>
      <h2 className="principal-titulo">Marcas</h2>
      <section  id="marcas"> {/* Agrega una sección para mostrar las marcas */}
        <MarcaList /> {/* Agrega el componente MarcaList */}
      </section>
      <section id="repuestos">
        {/* <h2 className="principal-titulo">Repuestos</h2> */}
        <RepuestosList />
      </section>
      <section id="clientes"> {/* Agrega una sección para mostrar las marcas */}
        <h2 className="principal-titulo">Clientes</h2>
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
