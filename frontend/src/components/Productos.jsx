import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Nav, Modal, Button } from "react-bootstrap"; // Asegúrate de importar Modal y Button de react-bootstrap
import { useParams, useNavigate, Link, useLocation  } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Productos.css";

const ProductosList = ({ onSectionChange, selectedSection}) => {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerCategorias();
    if (categoria) {
      getProductos(categoria);
    } else {
      setProductos([]);
    }
    updateSelectedSection();
  }, [categoria, location]); // Incluir location en las dependencias

  const updateSelectedSection = () => {
    const pathname = decodeURIComponent(location.pathname);
    const categoriaName = pathname.split("/")[2]; // Obtener la categoría de la URL
    onSectionChange(categoriaName);
  };

  const handleToggleClick = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleSectionClick = (section) => {
    onSectionChange(section);
    if (window.innerWidth <= 992) {
      handleToggleClick();
    }
  };

  const handleCotizarClick = (producto) => {
    setSelectedProduct(producto);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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

  const getProductos = async (categoria) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/productos/${categoria}`
      );
      if (response.status === 200) {
        setProductos(response.data);
      } else {
        console.error("Error fetching productos:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching productos:", error);
    }
  };

  return (
    <div className="container contenedor">
      <h2 className="principal-titulo">{categoria}</h2>
      <div
        className="container-categorias"
        style={{ backgroundColor: "gray", color: "white" }}
      >
        <h3 className="text-center mt-4 mb-3">
          Conoce todos nuestros vehículos
        </h3>
        {/* Navbar para pantallas móviles */}
        <Navbar
          expand="lg"
          className="nav-dropdown-mobile" // Agrega la clase para estilos móviles
          style={{
            backgroundColor: "gray",
            color: "white",
            width: "100%",
            border: "transparent",
          }}
          expanded={isNavExpanded}
          onToggle={handleToggleClick}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto navbar-categorias">
              {categorias.map((categoria) => (
                <Nav.Link
                  key={categoria._id}
                  as={Link}
                  to={`/productos/${categoria.name}`}
                  style={{
                    backgroundColor:
                      selectedSection === categoria.name
                        ? "#ca213b"
                        : "gray",
                    color: "white",
                  }}
                  onClick={() => {
                    handleSectionClick(categoria.name);
                  }}
                >
                  {categoria.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto._id} className="col-md-4 mb-4">
            <div
              className="card text-center border-black"
              style={{
                borderRadius: "10px",
                minHeight: "350px",
                marginTop: "10px",
              }}
            >
              <img
                className="card-img-top"
                src={producto.image}
                alt={producto.name}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.description}</p>
                <p className="card-text">
                  <strong>Category:</strong> {categoria || "No especificada"}
                </p>
                <p className="card-text">
                  <strong>Specs:</strong> {producto.specs}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleCotizarClick(producto)}
                >
                  Cotiza aquí
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal aquí */}
      {showModal && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Cotizar Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProduct && (
              <p>
                Elija una opción para cotizar el producto{" "}
                {selectedProduct.name}:
              </p>
            )}
            <Button
              variant="primary"
              onClick={() => {
                const mensaje = encodeURIComponent(
                  `Hola, quiero cotizar el producto ${selectedProduct.name}`
                );
                window.open(`https://wa.me/+5492916446200/?text=${mensaje}`);
              }}
            >
              Cotizar por WhatsApp
            </Button>{" "}
            <Button
              variant="primary"
              onClick={() => {
                navigate(
                  `/contacto?asunto=Cotizacion ${encodeURIComponent(
                    selectedProduct.name
                  )}`
                );
              }}
            >
              Cotizar por Mail
            </Button>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ProductosList;
