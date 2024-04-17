import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { RiWhatsappLine, RiMailLine, RiPhoneLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./AfterSell.css";

const PostVenta = ({isHome=false}) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // Retraso de 100 milisegundos
  }

  return (
    <div className="contenedor" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 className={isHome ? "principal-titulo-home" : "principal-titulo-seccion"}>Post Venta</h2>
        <div className="intro-repuestos" style={{ width: "80%"}}>
        
          <p className="repuestos-texto">
            El equipo de Bahia Mobility, se enorgullece de ofrecer soluciones
            especializadas y eficientes a tus necesidades vehiculares. Nuestro
            personal altamente capacitado y certificado garantiza un servicio de
            primera clase, cumpliendo con los estándares más exigentes de la
            industria. Como taller certificado por Cummins a nivel nacional,
            contamos con un arsenal de herramientas especializadas y un amplio
            stock de repuestos genuinos, asegurando así que cada intervención se
            realice con la calidad y la rapidez que mereces.
          </p>
          <p className="repuestos-texto">
            Entendemos plenamente la importancia de cada minuto en tus
            operaciones, por eso nos comprometemos a minimizar cualquier tiempo
            de inactividad. Nuestra eficiencia se refleja en nuestros tiempos de
            entrega reducidos, lo que te permite volver a la carretera con la
            menor interrupción posible. En Bahia Mobility, no solo nos
            esforzamos por cumplir con tus expectativas, sino por superarlas en
            cada paso del camino. Confía en nosotros para mantener tus vehículos
            en óptimas condiciones y maximizar su rendimiento en todo momento.
          </p>
        </div>
      <div className="contenedor-top">
          <Card className="tarjeta">
          <Card.Title style={{ textAlign: "center" , fontSize: "1.5em", fontWeight: "bold"}}>Garantía</Card.Title>
            <Card.Body className="text-center tarjeta-body">
              <Card.Img variant="bottom" className="imagen-repuestos" style={{ width: "300px", height: "350px"}} src="https://i.ibb.co/ZNYYxQb/images.jpg" />
              <Card.Text style={{marginTop: ".7em", minHeight: "100px", display: "flex", alignItems: "center", fontSize: "1.5em"}}>
                Nuestros vehiculos cuentan con una garantia de 100.000kms o 3
                años lo que suceda primero.
              </Card.Text>
            </Card.Body>
          </Card>
        <Card className="tarjeta">
          <Card.Title style={{ textAlign: "center" , fontSize: "1.5em", fontWeight: "bold"}}>Repuestos</Card.Title>
            <Card.Body className="text-center tarjeta-body">
              <Card.Img className="imagen-repuestos" variant="bottom" style={{ width: "300px", height: "350px" }} src="https://i.ibb.co/5xnhKH5/repuestos-originales.jpg" />
              <Card.Text style={{marginTop: ".7em", minHeight: "100px", display: "flex", alignItems: "center", fontSize: "1.5em"}}>
                En Bahia Mobility todos los repuestos son originales,
                garantizando asi que tu vehículo siempre este en perfecto
                estado.
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
      <div className="contenedor-top">
        <Card className="tarjeta">
            <Card.Title style={{ textAlign: "center" , fontSize: "1.5em", fontWeight: "bold", marginTop: "1em"}}>Asistencia Técnica</Card.Title>
            <Card.Body className="text-center tarjeta-body">
              <Card.Img className="imagen-repuestos" variant="bottom" style={{ width: "300px",height: "350px" }} src="https://i.ibb.co/mzVTrnQ/2024-03-13.jpg" />
              <Card.Text style={{marginTop: ".7em",  minHeight: "100px", display: "flex", alignItems: "center", fontSize: "1.5em"}}>
              Contamos con un equipo de profesionales técnicos para solucionar cualquier duda o consulta.
              Cualquier información puede enviarlo a través de nuestro formulario de contacto, por WhatsApp o al número del taller.
              </Card.Text>
              <Button
                variant="primary"
                className="mr-2"
                onClick={handleShowModal}
              >
                Solicite su turno
              </Button>
            </Card.Body>
          </Card>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Seleccione una opción de contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center d-flex flex-column">
          <Button
            variant="primary"
            className="mr-2"
            onClick={() => {
              const mensaje = encodeURIComponent(
                `Hola, quiero solicitar turno para el taller`
              );
              window.open(`https://wa.me/+5492916446200/?text=${mensaje}`);
            }}
          >
            <RiWhatsappLine className="mr-1" /> Solicitar turno por WhatsApp
          </Button>
          <Button
            variant="primary"
            className="mr-2"
            onClick={() => {
              navigate(
                `/contacto?asunto=Consulta`
              );
              scrollToTop();
            }}
          >
            <RiMailLine className="mr-1" /> Solicitar turno por Correo
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              window.location.href = `tel:+123456789`; // Reemplaza con el número de teléfono real
            }}
          >
            <RiPhoneLine className="mr-1" /> Llamar al Taller
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PostVenta;