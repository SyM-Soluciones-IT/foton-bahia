import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Modal,
  Container,
  Form,
} from "react-bootstrap";
import axios from "axios";
import logoFoton from "../assets/foton-logo-h-nobg.png";
import logoBahiaMobility from "../assets/logo-bahia-mobility.png";
import "./Header.css";

const Header = ({ onSectionChange }) => {
  const [categorias, setCategorias] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [selectedSection, setSelectedSection] = useState("inicio"); // Se inicializa selectedSection con "inicio"
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [asunto, setAsunto] = useState("");
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contacto", {
        name,
        email,
        message,
        asunto,
      });
      alert("Message sent successfully!");
      setName("");
      setAsunto("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message.");
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []); // Llamada inicial para obtener las categorías

  useEffect(() => {
    updateSelectedSection();
  }, [location, categorias]); // Se ejecuta cuando cambia la ubicación o las categorías

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
    const pathname = decodeURIComponent(location.pathname);
    if (pathname === "/") {
      setSelectedSection("inicio");
    } else if (pathname === "/repuestos") {
      setSelectedSection("repuestos");
    } else if (pathname === "/usados") {
      setSelectedSection("usados");
    } else if (pathname === "/contacto") {
      setSelectedSection("contacto");
    } else if (pathname === "/nosotros") {
      setSelectedSection("nosotros");
    } else {
      const categoria = categorias.find(
        (cat) => `/productos/${cat.name}` === pathname
      );
      if (categoria) {
        onSectionChange(categoria.name);
        setSelectedSection(categoria.name);
      } else {
        setSelectedSection("");
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

  const handleCotizarClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // Retraso de 100 milisegundos
  }

  return (
    <header>
      <div className="d-flex flex-row justify-content-between header-logo align-items-center">
        <Link to="/">
          <img src={logoFoton} alt="Logo Foton" width={150} />
        </Link>
        <h1>CONCESIONARIO OFICIAL</h1>
        <img className="logo-bahia" src={logoBahiaMobility} alt="Logo Bahia Mobility" width={150} />
      </div>
      <div className="m-0 p-0 ">
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
            <Nav className="mr-auto responsive-nav d-flex align-items-center">
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link-inicio"
                style={{
                  backgroundColor:
                    selectedSection === "inicio" ? "#ca213b" : "black",
                  color: "white",
                  padding: "1px 5px 2px",
                }}
                onClick={() => {
                  handleSectionClick("inicio");
                  scrollToTop();
                  } 
                }
              >
                Inicio
              </Nav.Link>
              <div className="vehiculos-dropdown-container d-lg-none">
                <div
                  className="nav-link dropdown-toggle custom-button vehiculos-dropdown"
                  onClick={handleCategoryClick}
                  style={{ cursor: "pointer", width: "fit-content", padding: "1px 5px 2px" }}
                >
                  Nuestros Vehículos
                </div>
                {showCategories && (
                  <Nav className="mr-auto show-categories flex-column align-items-center">
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
                          color: "white",
                          padding: "1px 5px 2px",
                        }}
                        onClick={() => {
                          handleSectionClick(categoria.name);
                          handleCategoryClick();
                          scrollToTop();
                        }}
                      >
                        {categoria.name}
                      </Nav.Link>
                    ))}
                  </Nav>
                )}
              </div>
              <NavDropdown
                title="Nuestros Vehículos"
                id="basic-nav-dropdown"
                className="d-none d-lg-block vehiculos-dropdown"
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
                      padding: "1px 5px 2px",
                      border: "transparent",
                    }}
                    onClick={() => {
                      handleSectionClick(categoria.name);
                      handleCategoryClick();
                      scrollToTop();
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
                  color: "white",
                  padding: "1px 5px 2px",
                }}
                onClick={() => {
                  handleSectionClick("repuestos");
                  scrollToTop();
                  }
                }
              >
                Post Venta
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/usados"
                className="nav-link-usados"
                style={{
                  backgroundColor:
                    selectedSection === "usados" ? "#ca213b" : "black",
                  color: "white",
                  padding: "1px 5px 2px",
                }}
                onClick={() => {
                  handleSectionClick("usados");
                  scrollToTop();
                  } 
                }
              >
                Usados
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contacto"
                style={{
                  backgroundColor:
                    selectedSection === "contacto" ? "#ca213b" : "black",
                  color: "white",
                  padding: "1px 5px 2px",
                }}
                onClick={() => {
                  handleSectionClick("contacto");
                  scrollToTop();
                  }
                }

              >
                Contacto
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/nosotros"
                style={{
                  backgroundColor:
                    selectedSection === "nosotros" ? "#ca213b" : "black",
                  color: "white",
                  padding: "1px 5px 2px",
                }}
                onClick={() => {
                  handleSectionClick("nosotros");
                  scrollToTop();
                  }
                }
              >
                Nosotros
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
          {/* <Nav className="d-flex flex-row nav-right">
            <Nav.Link
              style={{
                backgroundColor: "#ca213b",
                color: "white",
                padding: "1px 5px 2px",
                marginRight: "10px",
              }}
              onClick={() => handleCotizarClick("contacto")}
            >
              Contacto
            </Nav.Link>
            <Nav.Link
              style={{
                backgroundColor: "#ca213b", // Color verde de WhatsApp
                color: "white",
                padding: "1px 5px 2px",
              }}
              onClick={() => {
                const mensaje = encodeURIComponent(
                  "¡Hola! Estoy interesado en obtener más información."
                );
                window.open(`https://wa.me/+5492916446200/?text=${mensaje}`);
              }}
            >
              WhatsApp
            </Nav.Link>
          </Nav> */}
        </Navbar>
        {/* <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Contacto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formAsunto">
                  <Form.Label>Asunto</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the subject"
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>  */}
        
      </div>
    </header>
  );
};

export default Header;
