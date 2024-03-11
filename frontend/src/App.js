import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CustomNavBar from './components/Navbar';
import ProductosList from './components/Productos';
import ContactForm from './components/Contacto';
import CategoriaList from './components/Categorias';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <CustomNavBar />
        <Routes>
          <Route exact path="/" element={<CategoriaList />} />
          <Route exact path="/productos" element={<CategoriaList />} />
          <Route exact path="/productos/:categoria" element={<ProductosList />} />
          <Route exact path="/contacto" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
