import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Categorias from "./components/Categorias";
import Productos from "./components/Productos";
import Repuestos from "./components/Repuestos";
import Contacto from "./components/Contacto";
import About from "./components/About";
import ScrollToTopButton from "./components/ScrollToTopButton"; 

const App = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [smoothScrollingEnabled, setSmoothScrollingEnabled] = useState(true);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <Router>
      <div>
        <Header
          onSectionChange={handleSectionChange}
          selectedSection={selectedSection}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productos" element={<Categorias />} />
          <Route
            exact
            path="/productos/:categoria"
            element={
              <Productos
                onSectionChange={handleSectionChange}
                selectedSection={selectedSection}
              />
            }
          />
          <Route exact path="/repuestos" element={<Repuestos />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/nosotros" element={<About />} />
        </Routes>
        <ScrollToTopButton smoothScrollingEnabled={smoothScrollingEnabled} /> {/* Pasa la variable de estado como prop */}
      </div>
    </Router>
  );
};
export default App;
