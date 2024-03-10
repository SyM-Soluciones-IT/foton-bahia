import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CustomNavBar from './components/Navbar';
import ProductosList from './components/Productos';
import ContactForm from './components/Contacto';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <CustomNavBar />
        <Routes>
          <Route path="/" element={<ProductosList />} />
          <Route path="/productos" element={<ProductosList />} />
          <Route path="/productos/:categoria" element={<ProductosList />} />
          <Route path="/contacto" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
