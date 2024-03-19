import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import axios from "axios";
import logoFoton from "../assets/foton-logo-h-nobg.png";
import logoBahiaMobility from "../assets/logo-bahia-mobility.png";
import "./Header.css";

const Header = ({ onSectionChange }) => {
  const [categorias, setCategorias] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [selectedSection, setSelectedSection] = useState("inicio"); // Se inicializa selectedSection con "inicio"
  const location = useLocation();

  useEffect(() => {
    obtenerCategorias();
    updateSelectedSection();
  }, []);

  useEffect(() => {
    updateSelectedSection();
  }, [location]);

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

  const updateSelectedSection = () => {
    const pathname = decodeURIComponent(location.pathname); // Decodificar el pathname
    if (pathname === "/") {
      setSelectedSection("inicio");
    } else if (pathname === "/repuestos") {
      setSelectedSection("repuestos");
    } else if (pathname === "/contacto") {
      setSelectedSection("contacto");
    } else {
      // Aquí necesitas encontrar la categoría correspondiente al pathname
      const categoria = categorias.find(cat => `/productos/${cat.name}` === pathname);
      if (categoria) {
        setSelectedSection(categoria.name);
      } else {
        setSelectedSection(""); // Si no se encuentra ninguna categoría, selecciona una cadena vacía
      }
    }
  };

  const handleCategoryClick = () => {
    setShowCategories(!showCategories);
  };

  const handleNavToggleClick = () => {
    setIsNavExpanded(!isNavExpanded);
    setShowCategories(false);
  };

  const handleSectionClick = (section) => {
    onSectionChange(section);
    if (window.innerWidth <= 992) {
      setIsNavExpanded(false);
    }
    setShowCategories(false);
  };

  return (
    <header>
      <div className="d-flex justify-content-between header-logo">
        <Link to="/">
          <img src={logoFoton} alt="Logo Foton" width={150} />
        </Link>
        <img src={logoBahiaMobility} alt="Logo Bahia Mobility" width={80} />
      </div>
      <div className="m-0 p-0">
        <Navbar
          variant="dark"
          expand="lg"
          className="mobile-navbar"
          expanded={isNavExpanded}
        >
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleNavToggleClick}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link-inicio"
                style={{
                  backgroundColor:
                    selectedSection === "inicio" ? "#ca213b" : "black",
                }}
                onClick={() => handleSectionClick("inicio")}
              >
                Inicio
              </Nav.Link>
              <div className="vehiculos-dropdown-container d-lg-none">
                <div
                  className="nav-link dropdown-toggle custom-button"
                  onClick={handleCategoryClick}
                  style={{ cursor: "pointer", width: "fit-content" }}
                >
                  Nuestros vehículos
                </div>
                {showCategories && (
                  <Nav className="mr-auto show-categories flex-column">
                    {categorias.map((categoria) => (
                      <Nav.Link
                        key={categoria._id}
                        as={Link}
                        to={`/productos/${categoria.name}`}
                        style={{
                          backgroundColor:
                            selectedSection === categoria.name
                              ? "#ca213b"
                              : "black",
                        }}
                        onClick={() => {
                          handleSectionClick(categoria.name);
                          handleCategoryClick();
                        }}
                      >
                        {categoria.name}
                      </Nav.Link>
                    ))}
                  </Nav>
                )}
              </div>
              <NavDropdown
                title="Nuestros vehículos"
                id="basic-nav-dropdown"
                className="d-none d-lg-block"
                onClick={handleCategoryClick}
              >
                {categorias.map((categoria) => (
                  <NavDropdown.Item
                    key={categoria._id}
                    as={Link}
                    to={`/productos/${categoria.name}`}
                    style={{
                      backgroundColor:
                        selectedSection === categoria.name
                          ? "#ca213b"
                          : "black",
                        color: "white",
                        border: "transparent",
                    }}
                    onClick={() => {
                      handleSectionClick(categoria.name);
                      handleCategoryClick();
                    }}
                  >
                    {categoria.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/repuestos"
                style={{
                  backgroundColor:
                    selectedSection === "repuestos" ? "#ca213b" : "black",
                }}
                onClick={() => handleSectionClick("repuestos")}
              >
                Repuestos
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contacto"
                style={{
                  backgroundColor:
                    selectedSection === "contacto" ? "#ca213b" : "black",
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
