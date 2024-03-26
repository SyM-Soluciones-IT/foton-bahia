import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap"; // Asegúrate de importar Modal y Button de react-bootstrap
import { useNavigate, useLocation } from "react-router-dom";
import "./Usados.css";

const Usados = ({ onSectionChange, selectedSection }) => {
  const [usados, setUsados] = useState([]);
  const [selectedUsado, setSelectedUsado] = useState(null);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getUsados();
  }, [location]); // Incluir location en las dependencias

  const handleToggleClick = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleSectionClick = (section) => {
    onSectionChange(section);
    if (window.innerWidth <= 992) {
      handleToggleClick();
    }
  };

  const handleCotizarClick = (usado) => {
    setSelectedUsado(usado);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getUsados = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/usados");
      if (response.status === 200) {
        setUsados(response.data);
      } else {
        console.error("Error fetching usados:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching usados:", error);
    }
  };

  return (
    <div className="container contenedor d-flex flex-column align-items-center">
      <h2 className="principal-titulo-usados">Usados</h2>
      <div className="separador">
        <p>
          En nuestra búsqueda por ofrecerte solo lo mejor, cada vehículo en
          nuestra sección de usados ha sido sometido a rigurosos controles de
          calidad y mantenimiento. Desde camiones ligeros hasta pesados, cada
          unidad ha sido escogida meticulosamente para garantizar su calidad,
          desempeño y confiabilidad. 
          </p>
          <p>Nuestro equipo de expertos realiza
          exhaustivas inspecciones y pruebas para asegurarse de que cada vehículo
          cumpla con nuestros exigentes estándares. Nos comprometemos a ofrecerte
          una amplia variedad de opciones de alta calidad que se adapten a tus
          necesidades y presupuesto. Ya sea que estés buscando un camión para tu
          negocio o para tu uso personal, puedes confiar en que encontrarás solo
          los mejores vehículos en nuestra sección de usados. Además, nuestro
          equipo de ventas está aquí para brindarte toda la asistencia y
          orientación que necesites para tomar la mejor decisión. Explora nuestra
          selección de camiones usados hoy mismo y descubre la calidad y
          confiabilidad que solo nuestra concesionaria puede ofrecerte.
        </p>
      </div>
      <div className="row d-flex justify-content-center">
        {usados.map((usado) => (
          <div key={usado._id} className="col-md-4 mb-4">
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
                src={usado.image}
                alt={usado.name}
              />
              <div className="card-body">
                <h5 className="card-title">{usado.name}</h5>
                <p className="card-text">{usado.description}</p>
                <p className="card-text">
                  <strong>Specs:</strong> {usado.specs}
                </p>
                <p className="card-text">
                  <strong>Year:</strong> {usado.year || "No especificado"}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleCotizarClick(usado)}
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
            <Modal.Title>Cotizar Usado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedUsado && (
              <p>
                Elija una opción para cotizar el usado {selectedUsado.name}:
              </p>
            )}
            <Button
              variant="primary"
              style={{ marginRight: "5px", marginBottom: "5px" }}
              onClick={() => {
                const mensaje = encodeURIComponent(
                  `Hola, quiero cotizar el usado ${selectedUsado.name}`
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
                    selectedUsado.name
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

export default Usados;
