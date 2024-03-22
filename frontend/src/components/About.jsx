import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"; // Archivo CSS para los estilos específicos del componente

const About = () => {
  return (
    <section id="about" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "10%", marginRight: "10%"}}>
      <h2 className="principal-titulo">Sobre Nosotros</h2>
      <div style={{ marginLeft: "10%", marginRight: "10%", marginBottom: "2em", display: "flex", flexDirection: "row",justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}>
        <p className="principal-texto" style={{ width: "80%" }}>
        "Bahia Mobility es líder en soluciones de movilidad urbana sostenible. Nuestra empresa está comprometida con la innovación y la excelencia, ofreciendo productos y servicios de calidad que promueven un futuro más limpio y eficiente. Explora nuestra amplia gama de soluciones y descubre cómo estamos transformando la manera en que nos movemos en las ciudades. Desde vehículos eléctricos hasta sistemas de transporte inteligente, en Bahia Mobility estamos dedicados a crear un entorno urbano más accesible, seguro y respetuoso con el medio ambiente. Únete a nosotros en nuestro compromiso con la movilidad sostenible y haz parte del cambio hacia un futuro mejor."
        </p>
        <img src="https://i.ibb.co/5szXyHg/camiones.webp" alt="Imagen de camiones" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2em", marginLeft: "10%", marginRight: "10%", marginBottom: "2em", alignItems: "center", width: "100vw", backgroundColor: "#ca213b", color: "white", justifyItems: "center"}}>
        <div style={{textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h3 className="principal-titulo" style={{color: "white"}}>Nuestra Historia</h3>
          <p className="principal-texto" style={{textAlign: "justify", width: "80%"}}>
          En el corazón de nuestra historia yace un espíritu pionero que se remonta a décadas atrás. Todo comenzó en los vibrantes años 80, cuando un grupo de visionarios se unió con un propósito común: transformar la movilidad urbana para siempre. Desde nuestros humildes inicios como un taller de reparación de bicicletas hasta convertirnos en un referente global en soluciones de movilidad sostenible, nuestro viaje ha sido marcado por la innovación y el compromiso con la excelencia. A lo largo de los años, hemos superado desafíos, celebrado triunfos y aprendido lecciones valiosas que han forjado el camino hacia el futuro. Hoy, mientras reflexionamos sobre nuestra historia, miramos hacia adelante con entusiasmo, listos para continuar nuestro legado de transformación y liderazgo en la industria de la movilidad.
          </p>
        </div>
        <img src="https://fotonesmicamion.com/wp-content/uploads/2023/07/historia-nosotros.jpg.webp" alt="Imagen de camiones" style={{ width: "100%"}}/>
      </div>
    </section>
  );
};

export default About;
