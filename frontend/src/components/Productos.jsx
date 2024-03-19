import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Productos.css";

const ProductosList = ({ onSectionChange, selectedSection }) => {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { categoria } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerCategorias();
    if (categoria) {
      getProductos(categoria);
    } else {
      setProductos([]);
    }
  }, [categoria]);

  const handleSectionClick = (section) => {
    onSectionChange(section);
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

  const handleCotizarClick = (producto) => {
    setProductoSeleccionado(producto);
    setShowModal(true);
  };

  return (
    <div className="container contenedor">
    <h2 className="text-center d-none d-md-block">{categoria}</h2>
    <div className="container-categorias" style={{ backgroundColor: "gray", color: "white" }}>
      <h3 className="text-center mt-4 mb-3">Conoce todos nuestros vehículos</h3>
      <NavDropdown title={<RxHamburgerMenu />} id="nav-dropdown" className="d-lg-none justify-content-center" style={{ width: "100%" }} flip>
        {categorias.map((categoria) => (
          <NavDropdown.Item 
            key={categoria._id}
            as={Link}
            to={`/productos/${categoria.name}`}
            style={{
              backgroundColor: selectedSection === categoria.name ? "#ca173e" : "transparent",
              color: selectedSection === categoria.name ? "white" : "inherit",
              borderRadius: "20px",
              padding: "10px",
            }}
            onClick={() => {
              handleSectionClick(categoria.name);
            }}
          >
            {categoria.name}
            
          </NavDropdown.Item>
        ))}
      </NavDropdown>
      <NavDropdown title={false} id="nav-dropdown-computer" className="justify-content-center" style={{ width: "100%" }} flip>
      <div className="d-none d-lg-inline-flex">
          {categorias.map((categoria) => (
            <Link
              key={categoria._id}
              to={`/productos/${categoria.name}`}
              className="categoria-link"
              style={{
                backgroundColor: selectedSection === categoria.name ? "#ca173e" : "transparent",
                color: selectedSection === categoria.name ? "white" : "inherit",
                borderRadius: "20px",
                padding: "10px",
                margin: "5px",
              }}
              onClick={() => {
                handleSectionClick(categoria.name);
              }}
            >
              {categoria.name}
            </Link>
          ))}
        </div>
      </NavDropdown>
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
    </div>
  );
};

export default ProductosList;
