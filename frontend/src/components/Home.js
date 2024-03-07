import React from 'react';
import TrucksList from './Productos';
import PartsList from './Repuestos';
import ContactForm from './Contacto';

const Home = () => {
  return (
    <div>
      <section id="productos">
        <h2>Productos</h2>
        <TrucksList />
      </section>
      <section id="repuestos">
        <h2>Repuestos</h2>
        <PartsList />
      </section>
      <section id="contacto">
        <h2>Contacto</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
