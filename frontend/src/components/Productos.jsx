// En ProductosList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Modal, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const ProductosList = () => {
  const [productos, setProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const { categoria } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (categoria) {
      getProductos(categoria);
    } else {
      setProductos([]);
    }
  }, [categoria]);

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
    <Container>
      <h2 className="mt-4 mb-3">Productos List</h2>
      <Row>
        {productos.map((producto) => (
          <Col key={producto._id} md={4} className="mb-4">
            <Card className="primary" border="primary" align="center">
              <Card.Img variant="top" src={producto.image} />
              <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <Card.Text>
                  <strong>Category:</strong>{" "}
                  {categoria || "No especificada"}
                </Card.Text>
                <Card.Text>
                  <strong>Specs:</strong> {producto.specs}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleCotizarClick(producto)}
                >
                  Cotiza aquí
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cotizar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productoSeleccionado && (
            <p>
              Elija una opción para cotizar el producto{" "}
              {productoSeleccionado.name}:
            </p>
          )}
          <Button
            variant="primary"
            onClick={() => {
              const mensaje = encodeURIComponent(
                `Hola, quiero cotizar el producto ${productoSeleccionado.name}`
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
                  productoSeleccionado.name
                )}`
              );
            }}
          >
            Cotizar en la página
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductosList;
