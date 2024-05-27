
import React,{useState,useEffect} from "react";
import {Await, useNavigate} from "react-router";
import axios from 'axios';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card  from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';

function Convocatoria({idRequerimiento}){
    const [Message,SetMessage]=useState("");
    const [Convocatoria,SetConvocatoria]=useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //Esta peticion envia los datos del requerimiento, incluyendo el codigo del analista cliente
        // que lo solicito y el analista general al que se le asignara el requerimiento.
        //Recordar que al resolverse esta peticion tambien debe crearse un nuevo registro en proceso requerimiento, con la nueva fase en este caso seria la Fase 4
        if(Convocatoria=="" || Convocatoria==null){
            SetMessage("Debe llenar los campos antes de continuar");
            return;
        }
        try {
          const response = await axios.post("http://localhost:3003/requerimientos/fase3", {
   
              
              "Convocatoria": Convocatoria,
              "idusuario":window.sessionStorage.getItem("idusuario"),
              "idRequerimiento":idRequerimiento
              
          }).then((response)=>{
            window.location.reload();
            SetMessage(response.data.respuesta);
          })
          
        } catch (error) {
          console.log(error);
        }
      };

    return(
    <div className="center-card" style={{overflow:"auto",paddingTop:"1rem",width:"40rem",paddingLeft:"5rem",border:"solid 5px",paddingRight:"5rem",marginLeft:"13rem"}}> 
<h1> Editor de convocatoria </h1>
<Form >
<Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control  as='textarea' style={{resize:"none",marginBottom:"30px", width:"30rem",height:"20rem"}} value={Convocatoria} placeholder="Redacte la convocatoria que veran los candidatos"  onChange={(e)=>{SetConvocatoria(e.target.value)}} />
    
    
</Form.Group>
<Form.Group className="mb-5" controlId="exampleForm.ControlDate">

<button type="button" className="btn btn-primary" onClick={handleSubmit}>Guardar Convocatoria</button>
<h1>{Message}</h1>
</Form.Group>
</Form>


</div>)
}
export default Convocatoria;