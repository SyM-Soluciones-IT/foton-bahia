import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Nav, Modal, Button, Carousel } from "react-bootstrap"; // Asegúrate de importar Modal y Button de react-bootstrap
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Productos.css";

const ProductosList = ({ onSectionChange, selectedSection }) => {
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
                      selectedSection === categoria.name ? "#ca213b" : "gray",
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
                marginTop: "10px",
              }}
            >
              <Carousel interval={null} controls={producto.image.length > 1 || producto.video.length > 0}>
                {/* Renderizar imágenes */}
                {producto.image.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      height="290"
                      style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}
                      src={image}
                      alt={`Slide ${index}`}
                    />
                  </Carousel.Item>
                ))}
                {/* Condición para renderizar videos solo si existe al menos uno */}
                {producto.video.length > 0 &&
                  producto.video.map((video, index) => (
                    <Carousel.Item key={index} >
                      <iframe
                        width="100%"
                        height="290"
                        src={video}
                        title={`Video ${index}`}
                        allowFullScreen
                        border="transparent"
                        style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
              <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text"  style={{ textAlign: "start"}}> <strong>Motor: </strong>{producto.engine}</p>
                <p className="card-text"  style={{ textAlign: "start"}}>
                  <strong>Potencia:</strong> {producto.power}
                </p>
                <p className="card-text"  style={{ textAlign: "start"}}>
                  <strong>Transmisión:</strong> {producto.gearbox}
                </p>
                <p className="card-text"  style={{ textAlign: "start"}}>
                  <strong>PBT:</strong> {producto.load}
                </p>
                <a
                  href={producto.datasheet}
                  target="_self"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Descargar ficha técnica
                </a>
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
                Elija una opción para cotizar el producto {selectedProduct.name}
                :
              </p>
            )}
            <Button
              variant="primary"
              style={{ marginRight: "5px", marginBottom: "5px" }}
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
              style={{ marginRight: "5px", marginBottom: "5px" }}
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
