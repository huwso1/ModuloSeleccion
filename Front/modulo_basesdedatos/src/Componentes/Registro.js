import React,{useState} from "react";
import {Await, useNavigate} from "react-router";
import axios from 'axios';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card  from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';

function Registro(){
    const cargos=['Analista Cliente','Analista General'];
    const [usuario,Setusuario]=useState("");
    const [nombre,Setnombre]=useState("");
    const [apellido,Setapellido]=useState("");
    const[fechaNac,SetFecha]=useState("");
    const[ndoc,Setndoc]=useState();
    const[Message,SetMessage]=useState("");
 
    const handleSubmit = async (e) => {
     e.preventDefault();
     //Esta peticion envia los datos del candidato para que sea insertado en la base de datos
     // Tiene que insertar en empleado y cargoempleado
     try {
       const response = await axios.post("/banana", {

           "nomEmpleado": nombre,
           "apeEmpleado": apellido,
           "fechadenacimiento": fechaNac,
           "correo": usuario,
           "idtipocargo":ndoc
       }).then((response)=>{
         SetMessage(response.data.respuesta);
       })
       
     } catch (error) {
       console.log(error);
     }
   };
 
     
   
     return ( 
     <div className="center-card" style={{width:"40rem",paddingLeft:"5rem",border:"solid 5px",paddingRight:"5rem",marginLeft:"13rem"}}> 
     <h1> Crear nuevo empleado </h1>
     <Form styles={{width:"20rem"}}>
     <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label>Correo</Form.Label>
         <Form.Control as='input' type="email" placeholder="german23@hotmail.com" value={usuario} onChange={(e)=>{Setusuario(e.target.value.trim())}} />
         <Form.Label>Nombre</Form.Label>
         <Form.Control as='input' type="text" placeholder="Jhon" value={nombre} onChange={(e)=>{Setnombre(e.target.value.trim())}} />
         <Form.Label>Apellido</Form.Label>
         <Form.Control as='input' type="text" placeholder="Doe" value={apellido} onChange={(e)=>{Setapellido(e.target.value.trim())}} />
         <Form.Label>Cargo</Form.Label>
         <Form.Control as='select'   value={ndoc} onChange={(e)=>{Setndoc(e.target.valueAsNumber)}} >
            {cargos.map((cargo,index)=>{
                return <option value={''+(index+1)}>{cargo}</option>
            })}

         </Form.Control>
     </Form.Group>
   <Form.Group className="mb-5" controlId="exampleForm.ControlDate">
     <Form.Label>Fecha de nacimiento</Form.Label>
     <Form.Control type="date"  value={fechaNac} onChange={(e)=>{SetFecha(e.target.value)}}/>
     
     <button type="button" className="btn btn-primary" onClick={handleSubmit}>Crear Empleado</button>
   </Form.Group>
   </Form>
   
   <h1>{Message}</h1>
   </div>
 )}

export default Registro;