import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"; // Archivo CSS para los estilos específicos del componente

const About = ({isHome=false}) => {
  return (
    <section id="about" >
      <h2 className={isHome ? "principal-titulo-home" : "principal-titulo-seccion"}>Sobre Nosotros</h2>
      <div className="contenedor-uno">
        <p className="principal-texto">
        "Bahia Mobility es líder en soluciones de movilidad urbana sostenible. Nuestra empresa está comprometida con la innovación y la excelencia, ofreciendo productos y servicios de calidad que promueven un futuro más limpio y eficiente. Explora nuestra amplia gama de soluciones y descubre cómo estamos transformando la manera en que nos movemos en las ciudades. Desde vehículos eléctricos hasta sistemas de transporte inteligente, en Bahia Mobility estamos dedicados a crear un entorno urbano más accesible, seguro y respetuoso con el medio ambiente. Únete a nosotros en nuestro compromiso con la movilidad sostenible y haz parte del cambio hacia un futuro mejor."
        </p>
        <img src="https://i.ibb.co/5szXyHg/camiones.webp" alt="Imagen de camiones" style={{width: "100vw", minHeight: "220px", objectFit: "cover"}}/>
      </div>
      <div className="contenedor-dos" >
        <div className="sub-contenedor-2">
          <h3 className="principal-titulo-2" style={{marginBottom: "1em", color:"#ca173e", fontSize:"2.2em"}}>Nuestra Historia</h3>
          <p className="principal-texto-2" >
          En el corazón de nuestra historia yace un espíritu pionero que se remonta a décadas atrás. Todo comenzó en los vibrantes años 80, cuando un grupo de visionarios se unió con un propósito común: transformar la movilidad urbana para siempre. Desde nuestros humildes inicios como un taller de reparación de bicicletas hasta convertirnos en un referente global en soluciones de movilidad sostenible, nuestro viaje ha sido marcado por la innovación y el compromiso con la excelencia. A lo largo de los años, hemos superado desafíos, celebrado triunfos y aprendido lecciones valiosas que han forjado el camino hacia el futuro. Hoy, mientras reflexionamos sobre nuestra historia, miramos hacia adelante con entusiasmo, listos para continuar nuestro legado de transformación y liderazgo en la industria de la movilidad.
          </p>
        </div>
        <img src="https://fotonesmicamion.com/wp-content/uploads/2023/07/historia-nosotros.jpg.webp" alt="Imagen de camiones" style={{ width:"100%", minHeight: "220px", objectFit: "cover", marginBottom:"1em"}}/>
      </div>
    </section>
  );
};

export default About;
