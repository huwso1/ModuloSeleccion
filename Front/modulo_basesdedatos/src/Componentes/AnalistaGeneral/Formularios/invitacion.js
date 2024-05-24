
import React,{useState,useEffect} from "react";
import {Await, useNavigate} from "react-router";
import axios from 'axios';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card  from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';

function Invitacion({idRequerimiento,listacandidatos}){
    const [Message,SetMessage]=useState("");
    const [Convocatoria,SetConvocatoria]=useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //Esta peticion envia la lista de candidatos a los que se les ha enviado la invitacion
        // ademas, envia el id del requerimiento asociado a la convocatoria y por supuesto la invitacion
        //Recordar que al resolverse esta peticion tambien debe crearse un nuevo registro en proceso requerimiento, con la nueva fase en este caso seria la Fase 5
        if(Convocatoria=="" || Convocatoria==null ||listacandidatos.length==0){
            SetMessage("Debe llenar los campos antes de continuar o hace falta seleccionar al menos un candidato");
            return;
        }
        try {
          const response = await axios.post("/DetallesRequerimiento", {
   
              
              "listacandidatos":listacandidatos ,
              "idusuario":window.sessionStorage.getItem("idusuario"),
              "idRequerimiento":idRequerimiento,
              "invitacion":Convocatoria
              
          }).then((response)=>{
            useNavigate("NavigateBarAG")
            SetMessage(response.data.respuesta);
          })
          
        } catch (error) {
          console.log(error);
        }
      };

    return(
    <div className="center-card" style={{overflow:"auto",paddingTop:"1rem",width:"40rem",paddingLeft:"5rem",border:"solid 5px",paddingRight:"5rem",marginLeft:"13rem"}}> 
<h1> Editor de Invitacion </h1>
<Form >
<Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control  as='textarea' style={{resize:"none",marginBottom:"30px", width:"30rem",height:"20rem"}} value={Convocatoria} placeholder="Redacte la invitacion para los candidatos seleccionados"  onChange={(e)=>{SetConvocatoria(e.target.value)}} />
    
    
</Form.Group>
<Form.Group className="mb-5" controlId="exampleForm.ControlDate">

<button type="button" className="btn btn-primary" onClick={handleSubmit}>Enviar invitacion a los candidatos seleccionados</button>
<h1>{Message}</h1>
</Form.Group>
</Form>


</div>)
}
export default Invitacion;