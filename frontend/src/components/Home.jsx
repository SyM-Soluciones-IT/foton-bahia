// En el componente Home.js
import React from 'react';
import CategoriaList from './Categorias';
import RepuestosList from './Repuestos';
import ContactForm from './Contacto';
import MarcaList from './Marcas'; // Importa el componente MarcaList
import ClientesList from './Clientes';

const Home = () => {
  return (
    <div className='container'>
      <section id="productos">
        <CategoriaList />
      </section>
      <section  id="marcas"> {/* Agrega una sección para mostrar las marcas */}
        <MarcaList /> {/* Agrega el componente MarcaList */}
      </section>
      <section id="repuestos">
        <RepuestosList />
      </section>
      <section id="clientes"> {/* Agrega una sección para mostrar las marcas */}
        <ClientesList /> {/* Agrega el componente MarcaList */}
      </section>
      <section id="contacto">
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
