// En el componente Home.js
import React from 'react';
import CategoriaList from './Categorias';
import RepuestosList from './Repuestos';
import ContactForm from './Contacto';
import MarcaList from './Marcas'; // Importa el componente MarcaList
import ClientesList from './Clientes';

const Home = () => {
  return (
    <div>
      <section id="categorias">
        <h2>Productos</h2>
        <CategoriaList />
      </section>
      <section id="marcas"> {/* Agrega una sección para mostrar las marcas */}
        <h2>Marcas</h2>
        <MarcaList /> {/* Agrega el componente MarcaList */}
      </section>
      <section id="repuestos">
        <h2>Repuestos</h2>
        <RepuestosList />
      </section>
      <section id="clientes"> {/* Agrega una sección para mostrar las marcas */}
        <h2>Clientes</h2>
        <ClientesList /> {/* Agrega el componente MarcaList */}
      </section>
      <section id="contacto">
        <h2>Contacto</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
