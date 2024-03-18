// Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import axios from "axios";
import logoFoton from "../assets/foton-logo-h-nobg.png";
import logoBahiaMobility from "../assets/logo-bahia-mobility.png";
import "./Header.css";

const Header = ({ setSelectedCategory }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    obtenerCategorias();
  }, []);

  const obtenerCategorias = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/productos");
      if (response.status === 200) {
        setCategorias(response.data);
      } else {
        console.error("Error fetching categorias:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching categorias:", error);
    }
  };

  const handleToggleClick = () => {
    let button = document.getElementById("responsive-navbar-toggle");
    button.click();
  };

  const handleInicioClick = () => {
    setSelectedSection("inicio");
    setSelectedCategory(""); // Agregar esta línea
    handleToggleClick();
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSection(category); // Otra sección a destacar
    handleToggleClick();
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    handleCategoryClick(section); // Usa la misma función de manejo de categorías
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        backgroundColor: "#f8f9fa",
        zIndex: 100,
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="d-flex justify-content-between"
        style={{ padding: "0 3%" }}
      >
        <Link to="/">
          <img src={logoFoton} alt="Logo Foton" width={150} />
        </Link>
        <img src={logoBahiaMobility} alt="Logo Bahia Mobility" width={80} />
      </div>
      <div className="m-0 p-0">
        <Navbar
          variant="dark"
          expand="lg"
          style={{
            backgroundColor: "black",
            color: "white",
            position: "sticky",
            zIndex: 100,
            paddingLeft: "3%",
            paddingRight: "3%",
          }}
        >
          <Navbar.Toggle
            id="responsive-navbar-toggle"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ml-auto"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Nav.Link
                as={Link}
                to="/"
                style={{
                  textDecoration: "none",
                  backgroundColor:
                    selectedSection === "inicio" ? "#ca173e" : "transparent",
                  color: selectedSection === "inicio" ? "white" : "inherit",
                  borderRadius: "20px",
                  padding: "10px",
                  marginTop: "10px",
                }}
                onClick={handleInicioClick}
              >
                Inicio
              </Nav.Link>
              <NavDropdown title="Nuestros vehículos" id="nav-dropdown">
  {categorias.map((categoria) => (
    <NavDropdown.Item
      key={categoria._id}
      as={Link}
      to={`/productos/${categoria.name}`}
      style={{
        backgroundColor:
          selectedSection === categoria.name ? "#ca173e" : "transparent",
        color: selectedSection === categoria.name ? "white" : "inherit",
        borderRadius: "20px",
        padding: "10px",
      }}
      onClick={() => handleCategoryClick(categoria.name)}
    >
      {categoria.name}
    </NavDropdown.Item>
  ))}
</NavDropdown>
              <Nav.Link
                as={Link}
                to="/repuestos"
                style={{
                  textDecoration: "none",
                  backgroundColor:
                    selectedSection === "repuestos" ? "#333333" : "transparent",
                  color: selectedSection === "repuestos" ? "white" : "inherit",
                  borderRadius: "20px",
                  padding: "10px",
                }}
                onClick={() => handleSectionClick("repuestos")}
              >
                Repuestos
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contacto"
                style={{
                  textDecoration: "none",
                  backgroundColor:
                    selectedSection === "contacto" ? "#333333" : "transparent",
                  color: selectedSection === "contacto" ? "white" : "inherit",
                  borderRadius: "20px",
                  padding: "10px",
                }}
                onClick={() => handleSectionClick("contacto")}
              >
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
