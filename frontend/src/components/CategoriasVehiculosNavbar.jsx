// // CategoriasVehiculosNavbar.jsx
// import React, { useState, useEffect } from "react";
// import { NavDropdown } from "react-bootstrap";
// import axios from "axios";
// import { FaBars } from "react-icons/fa";

// const CategoriasVehiculosNavbar = ({ title, handleSectionClick, selectedSection, backgroundColor }) => {
//   const [categorias, setCategorias] = useState([]);
//   const [selectedSection, setSelectedSection] = useState(null);

//   useEffect(() => {
//     obtenerCategorias();
//   }, []);

//   const handleToggleClick = () => {
//     let button = document.getElementById("responsive-navbar-toggle");
//     button.click();
//   };

  
//   const handleSectionClick = (section) => {
//     setSelectedSection(section);
//     handleToggleClick();
//   };

//   const obtenerCategorias = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/productos");
//       if (response.status === 200) {
//         setCategorias(response.data);
//       } else {
//         console.error("Error fetching categorias:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error fetching categorias:", error);
//     }
//   };

//   return (
//     <NavDropdown
//       title={title} // Utiliza el título pasado como parámetro
//       id="nav-dropdown"
//       drop={{ xs: "down-start", lg: "down" }}
//       alignRight={false}
//       className="navbar-expand-lg" // Agrega la clase navbar-expand-lg
//       style={{ backgroundColor }} // Aplica el color de fondo
//     >
//       {categorias.map((categoria) => (
//         <NavDropdown.Item
//           key={categoria._id}
//           as="div"
//           style={{
//             backgroundColor:
//               selectedSection === categoria.name ? "#ca173e" : "transparent",
//             color: selectedSection === categoria.name ? "white" : "inherit",
//             borderRadius: "20px",
//             padding: "10px",
//           }}
//           onClick={() => handleSectionClick(categoria.name)} // Agrega el onClick para manejar el clic
//         >
//           {categoria.name}
//         </NavDropdown.Item>
//       ))}
//     </NavDropdown>
//   );
// };

// export default CategoriasVehiculosNavbar;
