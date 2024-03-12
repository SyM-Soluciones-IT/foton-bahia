// En el componente App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CustomNavBar from './components/Navbar';
import Home from './components/Home';
import Categorias from './components/Categorias';
import Productos from './components/Productos';
import Repuestos from './components/Repuestos';
import Contacto from './components/Contacto';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <CustomNavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productos" element={<Categorias />} />
          <Route exact path="/productos/:categoria" element={<Productos />} />
          <Route exact path="/repuestos" element={<Repuestos />} />
          <Route exact path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;