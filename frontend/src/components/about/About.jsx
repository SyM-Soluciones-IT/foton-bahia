import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"; // Archivo CSS para los estilos específicos del componente
import { ABOUT_TEXT } from "../contentText/ContentText"; // Importa las constantes de texto

const { title, content, image, historyTitle, historyContent, historyImage } = ABOUT_TEXT;

const About = ({isHome=false}) => {
  return (
    <section id="about" >
      <h2 className={isHome ? "principal-titulo-home" : "principal-titulo-seccion"}>{title}</h2>
      <div className="contenedor-uno">
        <p className="principal-texto">
          {content}
        </p>
        <img src={image} alt="Imagen de camiones" style={{width: "100vw", minHeight: "220px", objectFit: "cover", marginTop: "1em"}}/>
      </div>
      <div className="contenedor-dos" >
        <div className="sub-contenedor-2">
          <h3 className="principal-titulo-2" style={{marginBottom: "1em", color:"#ca173e", fontSize:"2.2em"}}>{historyTitle}</h3>
          <p className="principal-texto-2" >
            {historyContent}
          </p>
        </div>
        <img src={historyImage} alt="Imagen de camiones" style={{ width:"100%", minHeight: "220px", maxHeight: "400px", objectFit: "cover"}}/>
      </div>
    </section>
  );
};

export default About;
