// import React, { useState } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function CustomNavBar() {
//   const [selectedSection, setSelectedSection] = useState(null);

//   const handleInicioClick = async () => {
//     setSelectedSection('inicio');
//     // Hacer la petición para obtener las categorías
//     try {
//       const response = await axios.get('http://localhost:5000/api/productos');
//       if (response.status === 200) {
//         // Realizar alguna acción con las categorías si es necesario
//       } else {
//         console.error('Error fetching categorias:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching categorias:', error);
//     }
//   };

//   const handleProductosClick = async () => {
//     setSelectedSection('productos');
//     // Hacer la petición para obtener las categorías
//     try {
//       const response = await axios.get('http://localhost:5000/api/productos');
//       if (response.status === 200) {
//         // Realizar alguna acción con las categorías si es necesario
//       } else {
//         console.error('Error fetching categorias:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching categorias:', error);
//     }
//   };

//   const handleRepuestosClick = () => {
//     setSelectedSection('repuestos');
//   };

//   const handleContactoClick = () => {
//     setSelectedSection('contacto');
//   };

//   return (
//     <Navbar variant='dark' expand="lg" style={{ backgroundColor: 'gray', color: 'white', position: 'sticky', top: 120, zIndex: 100, padding: '10px' }}>
//       <Container>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ml-auto" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
//             <Nav.Link as={Link} to="/" style={{ textDecoration: 'none', backgroundColor: selectedSection === 'inicio' ? '#333333' : 'transparent', color: selectedSection === 'inicio' ? 'white' : 'inherit', borderRadius: '20px', padding: '10px' }} onClick={handleInicioClick}>
//               Inicio
//             </Nav.Link>
//             <Nav.Link as={Link} to="/productos" style={{ cursor: 'pointer', backgroundColor: selectedSection === 'productos' ? '#333333' : 'transparent', color: selectedSection === 'productos' ? 'white' : 'inherit', borderRadius: '20px', padding: '10px' }} onClick={handleProductosClick}>
//               Categorias
//             </Nav.Link>
//             <Nav.Link as={Link} to="/repuestos" style={{ textDecoration: 'none', backgroundColor: selectedSection === 'repuestos' ? '#333333' : 'transparent', color: selectedSection === 'repuestos' ? 'white' : 'inherit', borderRadius: '20px', padding: '10px' }} onClick={handleRepuestosClick}>
//               Repuestos
//             </Nav.Link>
//             <Nav.Link as={Link} to="/contacto" style={{ textDecoration: 'none', backgroundColor: selectedSection === 'contacto' ? '#333333' : 'transparent', color: selectedSection === 'contacto' ? 'white' : 'inherit', borderRadius: '20px', padding: '10px' }} onClick={handleContactoClick}>
//               Contacto
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavBar;
