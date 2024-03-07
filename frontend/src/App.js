import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes también
import Navbar from './components/Navbar';
import Home from './components/Home';
import TrucksList from './components/Productos';
import PartsList from './components/Repuestos';
import ContactForm from './components/Contacto';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Utiliza Routes en lugar de Switch */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productos" element={<TrucksList />} />
          <Route exact path="/repuestos" element={<PartsList />} />
          <Route exact path="/contacto" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
