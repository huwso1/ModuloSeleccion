import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Outlet} from 'react-router-dom';
import Card  from 'react-bootstrap/Card';
import '../css/Navbar.css';

 function NavigateBarAG() {
  var a=new Date();
          a.setHours(a.getHours()-5);
          
  return (
    <div>
<Navbar  bg="primary" variant="dark" expand="lg">
      <Container>
        <Nav classname="me-auto">
        <Navbar.Brand href="/NavigateBar/Crearunidad">Crear Requerimiento</Navbar.Brand>
        </Nav>
        <Card>{window.sessionStorage.getItem("Datos")} <br></br>{a.toISOString().substring(0,16).replace("T"," ")}</Card>
      </Container>

</Navbar>
    <Outlet/>
    </div>
    
  );
  
}
export default NavigateBarAG;