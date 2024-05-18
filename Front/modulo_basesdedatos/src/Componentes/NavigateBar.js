import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Outlet} from 'react-router-dom';
import '../css/Navbar.css';

 function NavigateBar() {
  return (
    <div>
<Navbar  bg="primary" variant="dark" expand="lg">
      <Container>
        <Nav classname="me-auto">
        <Navbar.Brand href="/NavigateBar/Crearunidad">Crear Requerimiento</Navbar.Brand>
        <p>{window.sessionStorage.getItem("Datos")} <br></br> {()=>{
          var a=new Date();
          a.setHours(a.getHours()-5);
          return a.toISOString;

        }}</p>
        </Nav>
      </Container>

</Navbar>
    <Outlet/>
    </div>
    
  );
  
}
export default NavigateBar;