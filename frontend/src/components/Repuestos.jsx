import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { RiWhatsappLine, RiMailLine, RiPhoneLine } from "react-icons/ri";
import "./Repuestos.css";

const PostVenta = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <Container className="d-flex flex-column align-items-center">
      <Row className="my-5">
        <Col>
        <h2 className="principal-titulo-home mt-0">Servicio Post Venta</h2>
          <p className="text-center">
            El equipo de Bahia Mobility, se enorgullece de ofrecer soluciones
            especializadas y eficientes a tus necesidades vehiculares. Nuestro
            personal altamente capacitado y certificado garantiza un servicio de
            primera clase, cumpliendo con los estándares más exigentes de la
            industria. Como taller certificado por Cummins a nivel nacional,
            contamos con un arsenal de herramientas especializadas y un amplio
            stock de repuestos genuinos, asegurando así que cada intervención se
            realice con la calidad y la rapidez que mereces.
          </p>
          <p className="text-center">
            Entendemos plenamente la importancia de cada minuto en tus
            operaciones, por eso nos comprometemos a minimizar cualquier tiempo
            de inactividad. Nuestra eficiencia se refleja en nuestros tiempos de
            entrega reducidos, lo que te permite volver a la carretera con la
            menor interrupción posible. En Bahia Mobility, no solo nos
            esforzamos por cumplir con tus expectativas, sino por superarlas en
            cada paso del camino. Confía en nosotros para mantener tus vehículos
            en óptimas condiciones y maximizar su rendimiento en todo momento.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="tarjeta">
          <Card.Img variant="top" src="https://i.ibb.co/ZNYYxQb/images.jpg" />
            <Card.Body className="text-center">
              <Card.Title>Garantía</Card.Title>
              <Card.Text>
                Nuestros vehiculos cuentan con una garantia de 100.000kms o 3
                años lo que suceda primero.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className="tarjeta">
            <Card.Img variant="top" src="https://i.ibb.co/Nym7Cbv/bahia-mobility-repuestos.jpg" />
            <Card.Body className="text-center">
              <Card.Title>Repuestos</Card.Title>
              <Card.Text>
                En Bahia Mobility todos los repuestos son originales,
                garantizando asi que tu vehículo siempre este en perfecto
                estado.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card className="tarjeta">
            <Card.Img variant="top" src="https://i.ibb.co/q9gGhwV/POST.jpg" />
            <Card.Body className="text-center">
              <Card.Title>Cuidados básicos de tu unidad</Card.Title>
              <Card.Text>
                Cuidados preventivos para mantener tu vehículo en excelentes condiciones por mas tiempo
              </Card.Text>
              <a href="https://internacionalvehiculos.com/es/chasis/mantenimiento/cuales-son-los-mantenimientos-preventivos-de-los-camiones-foton/" className="btn btn-primary" target="_blank" rel="noopener noreferrer" >Más Información</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className="tarjeta">
            <Card.Img variant="top" src="https://i.ibb.co/mzVTrnQ/2024-03-13.jpg" />
            <Card.Body className="text-center">
              <Card.Title>Reparaciones</Card.Title>
              <Card.Text>
                Contamos con un equipo de reparaciones de alta tecnología. Ante
                cualquier inconveniente no dude en solicitar su turno mediante
                las siguientes vias de comunicacion
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
        </Col>
      </Row>
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
              window.location.href = `mailto:info@taller.com?subject=Solicitud de turno para el taller`;
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
    </Container>
  );
};

export default PostVenta;
