// En ProductosList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './Productos.css';

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
    <div className="container contenedor">
      <div className="row">
        {productos.map((producto) => (
          <div key={producto._id} className="col-md-4 mb-4">
            <div className="card text-center primary border-primary">
              <img className="card-img-top" src={producto.image} alt={producto.name} />
              <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.description}</p>
                <p className="card-text">
                  <strong>Category:</strong>{" "}
                  {categoria || "No especificada"}
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
      {showModal && (
        <div className="modal show" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cotizar Producto</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {productoSeleccionado && (
                  <p>
                    Elija una opción para cotizar el producto{" "}
                    {productoSeleccionado.name}:
                  </p>
                )}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    const mensaje = encodeURIComponent(
                      `Hola, quiero cotizar el producto ${productoSeleccionado.name}`
                    );
                    window.open(`https://wa.me/+5492916446200/?text=${mensaje}`);
                  }}
                >
                  Cotizar por WhatsApp
                </button>{" "}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate(
                      `/contacto?asunto=Cotizacion ${encodeURIComponent(
                        productoSeleccionado.name
                      )}`
                    );
                  }}
                >
                  Cotizar en la página
                </button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductosList;
