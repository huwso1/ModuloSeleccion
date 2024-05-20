import {useState, useEffect} from 'react';
import React from 'react';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card  from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../../css/Unidad.css';
import Form from 'react-bootstrap/Form';

function Candidato({Candidato,handler,handlerinvitacion}){
    
const [debug,setdebug]=useState();
const handlerCandidato=()=>{
    handler(Candidato.usuario);
}
const handlerInvitacion=(ischecked)=>{
    handlerinvitacion(Candidato.usuario,ischecked);
}




return(
    
    <CardGroup>
        <Card onClick={()=>{handlerCandidato()}} style={{cursor:"pointer"}}>
            <CardBody>
                <p>{Candidato.usuario}</p>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
            <p>{Candidato.nombre} {Candidato.apellido}</p>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
            <p>{Candidato.fechaNac}</p>

            </CardBody>
        </Card>
        <Card>
            <CardBody>
            <p>{Candidato.nDoc}</p>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
            <Form.Check as='input' type='checkbox' onClick={(element)=>{
               handlerInvitacion(element.target.checked);
            }}/>
            </CardBody>
        </Card>
    </CardGroup>
    
    
)

}
export default Candidato;